var React = require("react");
var ListContainer = require('./ListContainer');

var ProductDetail = React.createClass({
  render: function(){
    return (
      <div className="container">
        <div className="row">
          <p>This is the product details page. This is not protected by the route.</p>
          <ListContainer />
        </div>
      </div>
    )
  }
});

module.exports = ProductDetail;