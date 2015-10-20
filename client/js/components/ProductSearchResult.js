var React = require("react");
var ListContainer = require('./ListContainer');

var ProductSearchResult = React.createClass({
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