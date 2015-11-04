var React = require("react");
var Router = require('react-router');
var Navigation = require('react-router').Navigation;
var State = require('react-router').State;
var Link = Router.Link;

var ProductAction = require('../actions/product-actions');
var ProductStore = require('../stores/product-store');

var SearchNavBar = require('./search-nav-bar');
var ListContainer = require('./ListContainer');

var Input = require('react-bootstrap').Input;
var ButtonInput = require('react-bootstrap').ButtonInput;
var Col = require('react-bootstrap').Col;
var Row = require('react-bootstrap').Row;


var ProductSearchResult = React.createClass({
  propTypes: {

  },
  mixins: [Navigation, State],
  getInitialState: function () {
    return {
      searchResults: ProductStore.getSearchResults()
    };
  },
  componentWillMount: function () {
    console.log('product-search-results: componentWillMount');
    ProductStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function () {
    console.log('product-search-results: componentWillUnmount');
    ProductStore.removeChangeListener(this._onChange);
  },
  _onChange: function () {
    console.log('product-search-results: _onChange');
    this.setState({
      searchResults: ProductStore.getSearchResults()
    });
  },
  render: function(){
    console.log('product-search-results: render', this.state.searchResults);
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