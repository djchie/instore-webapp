var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

var Main = React.createClass({
  render: function(){
    return (
      <span>
        <nav className="navbar navbar-default navbar-static-top">
          <div className="container">
            <div className="navbar-header">
              <Link to="home" className="navbar-brand"> InStore </Link>
            </div>
            <ul className="nav navbar-nav pull-left">
              <li><Link to="home" className="navbar-brand"> Home </Link></li>
              <li><Link to="productSearchResult" className="navbar-brand"> Search </Link></li>
              <li><Link to="productDetail" className="navbar-brand"> Product </Link></li>
            </ul>
            <ul className="nav navbar-nav pull-right">
              <li><Link to="home" className="navbar-brand"> Sign Up </Link></li>
              <li><Link to="home" className="navbar-brand"> Sign In </Link></li>
            </ul>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <RouteHandler />
          </div>
        </div>
      </span>
    )
  }
});

module.exports = Main;