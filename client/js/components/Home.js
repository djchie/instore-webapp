var React = require("react");
var ListContainer = require('./ListContainer');
var Jumbotron = require('react-bootstrap').Jumbotron;
var Button = require('react-bootstrap').Button;
var Input = require('react-bootstrap').Input;
var ButtonInput = require('react-bootstrap').ButtonInput;
var Col = require('react-bootstrap').Col;
var Row = require('react-bootstrap').Row;

var Home = React.createClass({
  propTypes: {},
  mixins : [],
  getInitialState: function() {
    return {

    };
  },
  getDefaultProps: function() {

  },
  componentWillMount : function() {

  },
  componentWillReceiveProps: function() {

  },
  componentWillUnmount : function() {

  },
  render: function(){
    return (
      <div className="container">
        <Jumbotron style={styles.hero}>
          <div className="container" style={styles.heroCaption}>
            <h1>Welcome Vapors</h1>
            <p>Search local OC vape shops for products you need now</p>
          </div>
          <div className="container" style={styles.heroSearchBar}>
            <form>
              <Row>
                <Col md={6}>
                  <Input type="text" label="Search" placeholder="What are you looking for?" />
                </Col>
                <Col md={4}>
                  <Input type="text" label="Location" placeholder="Enter location" />
                </Col>
                <Col md={2}>
                  <ButtonInput type="submit" bsStyle="primary" value="Search" />
                </Col>
              </Row>
            </form>
          </div>
        </Jumbotron>
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
    )
  }
});

var styles = {
  hero: {
    background: 'url(\'../client/asset/beach.png\')'
  },
  heroCaption: {
    textAlign: 'center'
  }, 
  heroSearchBar: {

  }
};

module.exports = Home;