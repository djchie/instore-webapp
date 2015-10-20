var React = require("react");
var ListContainer = require('./ListContainer');
// var Jumbotron = require('react-bootstrap').Jumbotron;

var Home = React.createClass({
  render: function(){
    return (
      <div className="container">
        <div className="row">
          <p>This is the home page. This is not protected by the route.</p>
          <ListContainer />
        </div>
      </div>
    )
  }
});

module.exports = Home;

/*<Jumbotron>
          <h1>Hello, world!</h1>
          <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <p><Button bsStyle="primary">Learn more</Button></p>
        </Jumbotron>*/