var React = require("react");
var Router = require('react-router');

var ListContainer = require('./ListContainer');
var Jumbotron = require('react-bootstrap').Jumbotron;
var Input = require('react-bootstrap').Input;
var ButtonInput = require('react-bootstrap').ButtonInput;
var Col = require('react-bootstrap').Col;
var Row = require('react-bootstrap').Row;
var Link = Router.Link;

var Home = React.createClass({
  propTypes: {},
  mixins: [],
  getInitialState: function() {
    return {
      search: '',
      location: '',
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
  },
  handleSearchInputChange: function () {
    this.setState({
      search: this.refs.searchInput.getValue()
    });
  },
  onSearchInputKeyDown: function (e) {
    if (e.keyCode === 13) {
      if (this.state.isLocationAutocompleteOn) {
        this.toggleIsLocationAutocompleteOn();
        console.log('onSearchInputKeyDown made the bool', this.state.isLocationAutocompleteOn);
      }
      else if (this.state.search !== '' && this.state.location !== '') {
        console.log('Search', this.state.search);
        console.log('Location', this.state.location);
        window.location.assign('/search/' + this.state.search + '/location/' + this.state.location);
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
      console.log('handlePlaceChanged made the bool', this.state.isLocationAutocompleteOn);
    }
    this.setState({
      location: this.refs.locationInput.getValue()
    });
  },
  handleLocationInputChange: function () {
    if (!this.state.isLocationAutocompleteOn) {
      this.toggleIsLocationAutocompleteOn();
      console.log('handleLocationInputChange made the bool', this.state.isLocationAutocompleteOn);
    }
    this.setState({
      location: this.refs.locationInput.getValue()
    });
  },
  onSearchButtonPress: function () {
    if (this.state.search !== ''  && this.state.location !== '') {
      console.log('Search', this.state.search);
      console.log('Location', this.state.location);
      window.location.assign('/search/' + this.state.search + '/location/' + this.state.location);
    }
  },
  render: function(){
    return (
      <div className="container-fluid" style={styles.content}>
        <nav className="navbar navbar-default navbar-static-top" style={styles.navBar}>
          <div className="container" style={styles.navBarContentContainer}>
            <div className="navbar-header" style={styles.navBarLogo}>
              <Link to="/" className="navbar-brand" style={styles.navBarLink}> InStore </Link>
            </div>
            <ul className="nav navbar-nav pull-right" style={styles.navBarMenu}>
              <li><Link to="/" className="navbar-brand" style={styles.navBarLink}> Home </Link></li>
              <li><Link to="/search/Any/location/All" className="navbar-brand" style={styles.navBarLink}> Search </Link></li>
              <li><Link to="/product" className="navbar-brand" style={styles.navBarLink}> Product </Link></li>
            </ul>
          </div>
        </nav>
        <Jumbotron style={styles.hero}>
          <div className="container" style={styles.heroCaption}>
            <h1>Welcome!</h1>
            <p>Search local OC vape shops for products you need now</p>
          </div>
          <div className="container" style={styles.searchContainer}>
            <form>
              <Row>
                <Col md={6} style={styles.searchInputContainer}>
                  <Input ref="searchInput" type="text" label="Search" placeholder="What are you looking for?" bsSize="large" onChange={this.handleSearchInputChange} onKeyDown={this.onSearchInputKeyDown} />
                </Col>
                <Col md={4} style={styles.locationInputContainer}>
                  <Input ref="locationInput" id="locationInput" type="text" label="Location" placeholder="Enter location" bsSize="large" onChange={this.handleLocationInputChange} onBlur={this.handleLocationInputChange} onKeyDown={this.onSearchInputKeyDown} />
                </Col>
                <Col md={2} style={styles.searchButtonContainer}>
                  <ButtonInput type="button" bsStyle="primary" value="Search" bsSize="large" block onClick={this.onSearchButtonPress} style={styles.searchButton} />
                </Col>
              </Row>
            </form>
          </div>
        </Jumbotron>
        <div className="container">
          <div className="row">
            <h3>About InStore</h3>
            <p>
              Wouldn’t you want to know if something you wanted was available 
              and cheaper at a nearby store? InStore provides accurate and updated
              information about product availability and pricing at retail stores near you.
            </p>
          </div>
          <div className="row">
            <h3>Product Availability</h3>
            <p>Avoid wasted trips by checking availability before you get there.</p>
            <h3>Price Comparisons</h3>
            <p>Get the best deal by comparing prices at stores in your area.</p>
            <h3>Live and Accurate</h3>
            <p>Our server is live so your search is guaranteed in real time.</p>
          </div>
          <div className="row">
            <h3>List your business!</h3>
            <p>Are you a retail store looking to get more exposure for your inventory?</p>
          </div>
          <div className="row">
            <p>This is the home page. This is not protected by the route.</p>
          </div>
        </div>
      </div>
    )
  }
});

var styles = {
  content: {
    paddingLeft: 0,
    paddingRight: 0
  },
  navBar: {
    // marginBottom: 0,
    // borderColor: '#64cce7',
    marginBottom: -60,
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
    borderBottom: 0,
    height: 60,
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
    color: 'white'
  },
  hero: {
    backgroundImage: 'url(\'http://jinqiaojs.com/hd/pretty-beach-hd-wallpaper-0zd.jpg\')',
    backgroundSize: 'cover',
    height: 600,
    paddingLeft: 0,
    paddingRight: 0,
    borderRadius: 0,
    paddingBottom: 0,
    paddingTop: '10%',
    position: 'relative'
  },
  heroCaption: {
    textAlign: 'center',
    color: 'white'
  }, 
  searchContainer: {
    background: 'rgba(15,81,133,0.3)',
    marginLeft: 0,
    marginRight: 0,
    width: '100%',
    paddingLeft: 150,
    paddingRight: 150,
    height: 150,
    paddingTop: 27,
    position: 'absolute',
    bottom: 0
  },
  searchInputContainer: {
    color: 'white',
    fontSize: 16
  },
  locationInputContainer: {
    color: 'white',
    fontSize: 16
  },
  searchButtonContainer: {
    marginTop: 26
  },
  searhcButton: {
  }
};

module.exports = Home;