var React = require("react");
var Router = require('react-router');
var Navigation = require('react-router').Navigation;
var State = require('react-router').State;
var Link = Router.Link;

var ProductAction = require('../actions/product-actions');
// var ProductStore = require('../stores/product-store');

var Input = require('react-bootstrap').Input;
var ButtonInput = require('react-bootstrap').ButtonInput;
var Col = require('react-bootstrap').Col;
var Row = require('react-bootstrap').Row;

// If you want to make the bar fixed
// Change from navbar-static-top to navbar-fixed-top
// And in the following div, make the marginTop: 60

var SearchNavBar = React.createClass({
  propTypes: {

  },
  mixins: [Navigation, State],
  getInitialState: function () {
    return {
      query: this.getParams().query.replace(/\+/g, ' '),
      location: this.getParams().location.replace(/\+/g, ' '),
      isLocationAutocompleteOn: false
    };
  },
  componentDidMount: function () { 
    var locationInput = document.getElementById('locationInput');
    var options = {
      types: ['(cities)'],
      componentRestrictions: {country: 'us'}
    };
    var autocomplete = new google.maps.places.Autocomplete(locationInput, options);
    google.maps.event.addListener(autocomplete, 'place_changed', this.handlePlaceChanged);
    console.log('search-nav-bar: componentDidMount');
    ProductAction.searchProduct(this.state.query, this.state.location);
  },
  handleSearchInputChange: function () {
    this.setState({
      query: this.refs.searchInput.getValue()
    });
  },
  onSearchInputKeyDown: function (e) {
    if (e.keyCode === 13) {
      if (this.state.isLocationAutocompleteOn) {
        this.toggleIsLocationAutocompleteOn();
      }
      else if (this.state.query !== '' && this.state.location !== '') {
        // this.transitionTo('productSearchResults', {
        //   query: this.state.query.replace(/ /g, '+'),
        //   location: this.state.location.replace(/ /g, '+')
        // });
        ProductAction.searchProduct(this.state.query, this.state.location);
      }
    }
  },
  toggleIsLocationAutocompleteOn: function () {
    this.setState({
      isLocationAutocompleteOn: !this.state.isLocationAutocompleteOn
    });
  },
  handlePlaceChanged: function () {
    if (this.state.isLocationAutocompleteOn) {
      this.toggleIsLocationAutocompleteOn();
    }
    this.setState({
      location: this.refs.locationInput.getValue()
    });
  },
  handleLocationInputChange: function () {
    if (!this.state.isLocationAutocompleteOn) {
      this.toggleIsLocationAutocompleteOn();
    }
    this.setState({
      location: this.refs.locationInput.getValue()
    });
  },
  onSearchButtonPress: function () {
    if (this.state.query !== ''  && this.state.location !== '') {
      // this.transitionTo('productSearchResults', {
      //   query: this.state.query.replace(/ /g, '+'),
      //   location: this.state.location.replace(/ /g, '+')
      // });
      ProductAction.searchProduct(this.state.query, this.state.location);
    }
  },
  render: function(){
    return (
      <nav className="navbar navbar-default navbar-static-top" style={styles.navBar}>
        <div className="container" style={styles.navBarContentContainer}>
          <div className="navbar-header" style={styles.navBarLogo}>
            <Link to="home" className="navbar-brand" style={styles.navBarLink}> InStore </Link>
          </div>
          <div style={styles.searchFormContainer}>
            <Col md={4}>
              <Input ref="searchInput" type="text" value={this.state.query} addonBefore="Search" placeholder="What are you looking for?" bsSize="large" onChange={this.handleSearchInputChange} onKeyDown={this.onSearchInputKeyDown} standalone  />
            </Col>
            <Col md={3}>
              <Input ref="locationInput" id="locationInput" type="text" value={this.state.location} addonBefore="Location" placeholder="Enter location" bsSize="large" onChange={this.handleLocationInputChange} onBlur={this.handleLocationInputChange} onKeyDown={this.onSearchInputKeyDown} standalone  />
            </Col>
            <Col md={1}>
              <ButtonInput type="button" bsStyle="primary" value="Search" bsSize="large" block onClick={this.onSearchButtonPress} standalone  />
            </Col>
          </div>
          <ul className="nav navbar-nav pull-right" style={styles.navBarMenu}>
            <li><Link to="home" className="navbar-brand" style={styles.navBarLink}> Connect Your Inventory </Link></li>
            {
            /*
            <li><Link to="home" className="navbar-brand" style={styles.navBarLink}> Help </Link></li>
            <li><Link to="home" className="navbar-brand" style={styles.navBarLink}> Sign Up </Link></li>
            <li><Link to="home" className="navbar-brand" style={styles.navBarLink}> Sign In </Link></li>
            */
            }
          </ul>
        </div>
      </nav>
    );
  }
});

var styles = {
  content: {
    paddingLeft: 0,
    paddingRight: 0
  },
  navBar: {
    marginBottom: 0,
    borderColor: '#64cce7',
  },
  navBarContentContainer: {
    marginLeft: 0,
    marginRight: 0,
    width: '100%',
    height: '100%'
  },
  navBarLogo: {
    paddingTop: 5
  },
  navBarMenu: {
    paddingTop: 5
  },
  navBarLink: {
    color: 'grey'
  },
  searchFormContainer: {
    paddingTop: 8
  }
};

module.exports = SearchNavBar;