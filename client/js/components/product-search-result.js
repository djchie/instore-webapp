var React = require("react");
var Router = require('react-router');
var Navigation = require('react-router').Navigation;
var State = require('react-router').State;

var ListContainer = require('./ListContainer');

var ProductSearchResult = React.createClass({
  propTypes: {

  },
  mixins: [Navigation, State],
  getInitialState: function () {
    console.log(this.getPath());
    console.log(this.getParams());
    return {
      search: ''
    }
  },
  render: function(){
    return (
      <div className="container">
        <div className="row">
          <p>This is the product search results page. This is not protected by the route.</p>
          <ListContainer />
        </div>
      </div>
    )
  }
});

module.exports = ProductSearchResult;