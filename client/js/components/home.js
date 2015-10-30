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
      
    };
  },
  componentDidMount: function () { 
    var locationInput = document.getElementById('locationInput');
    var options = {
      types: ['(cities)'],
      componentRestrictions: {country: 'us'}
    };
    this.setState({
      autocomplete: new google.maps.places.Autocomplete(locationInput, options)
    });
  },
  onSearchInputKeyDown: function (e) {
    if (e.keyCode === 13) {
      console.log('Enter key pressed');
    }
  },
  onSearchButtonPress: function () {
    console.log('Search button pressed');
  },
  render: function(){
    return (
      <div className="container-fluid" style={styles.content}>
        <nav className="navbar navbar-default navbar-static-top" style={styles.navBar}>
          <div className="container" style={styles.navBarContentContainer}>
            <div className="navbar-header" style={styles.navBarLogo}>
              <Link to="home" className="navbar-brand" style={styles.navBarLink}> InStore </Link>
            </div>
            <ul className="nav navbar-nav pull-right" style={styles.navBarMenu}>
              <li><Link to="home" className="navbar-brand" style={styles.navBarLink}> Home </Link></li>
              <li><Link to="productSearchResult" className="navbar-brand" style={styles.navBarLink}> Search </Link></li>
              <li><Link to="productDetail" className="navbar-brand" style={styles.navBarLink}> Product </Link></li>
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
                  <Input type="text" label="Search" placeholder="What are you looking for?" bsSize="large" onKeyDown={this.onSearchInputKeyDown} />
                </Col>
                <Col md={4} style={styles.locationInputContainer}>
                  <Input id="locationInput" type="text" label="Location" placeholder="Enter location" bsSize="large" onKeyDown={this.onSearchInputKeyDown} />
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