var React = require("react");
var Router = require('react-router');
var Navigation = require('react-router').Navigation;
var State = require('react-router').State;
var Link = Router.Link;

var Input = require('react-bootstrap').Input;
var ButtonInput = require('react-bootstrap').ButtonInput;
var Col = require('react-bootstrap').Col;
var Row = require('react-bootstrap').Row;

var SearchNavBar = require('./search-nav-bar');
var ListContainer = require('./ListContainer');

var ProductSearchResult = React.createClass({
  propTypes: {

  },
  mixins: [Navigation, State],
  getInitialState: function () {
    return {
      productSearch: this.getParams().productSearch.replace(/'+'/g, ' '),
      location: this.getParams().location.replace(/'+'/g, ' ')
    };
  },
  render: function(){
    return (
      <div className="container-fluid" style={styles.content}>
        <SearchNavBar />
        <Row className="">
          <p>This is the product search results page. This is not protected by the route.</p>
          <ListContainer />
        </Row>
      </div>
    );
  }
});

var styles = {
  content: {
    paddingLeft: 0,
    paddingRight: 0
  },
};

module.exports = ProductSearchResult;