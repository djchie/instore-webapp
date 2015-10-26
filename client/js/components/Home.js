var React = require("react");
var ListContainer = require('./ListContainer');
var Jumbotron = require('react-bootstrap').Jumbotron;
var Input = require('react-bootstrap').Input;
var ButtonInput = require('react-bootstrap').ButtonInput;
var Col = require('react-bootstrap').Col;
var Row = require('react-bootstrap').Row;
var Link = require('react-bootstrap').Link;

var Home = React.createClass({
  propTypes: {},
  mixins: [],
  getInitialState: function() {
    return {

    };
  },
  getDefaultProps: function() {

  },
  componentWillMount: function() {

  },
  componentWillReceiveProps: function() {

  },
  componentWillUnmount: function() {

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
        <Jumbotron style={styles.hero}>
          <div className="container" style={styles.heroCaption}>
            <h1>Welcome Vapors</h1>
            <p>Search local OC vape shops for products you need now</p>
          </div>
          <div className="container" style={styles.searchContainer}>
            <form>
              <Row>
                <Col md={6} style={styles.searchInputContainer}>
                  <Input type="text" label="Search" placeholder="What are you looking for?" bsSize="large" onKeyDown={this.onSearchInputKeyDown} />
                </Col>
                <Col md={4} style={styles.locationInputContainer}>
                  <Input type="text" label="Location" placeholder="Enter location" bsSize="large" onKeyDown={this.onSearchInputKeyDown} />
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