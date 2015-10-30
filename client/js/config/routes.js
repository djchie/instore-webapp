var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Main = require('../components/Main');
// var Register = require('../components/login-register/Register');
// var Login = require("../components/login-register/Login");
// var Logout = require('../components/login-register/Logout');
// var Dashboard = require('../components/secure/Dashboard');
var Home = require("../components/home");
var ProductSearchResult = require("../components/ProductSearchResult");
var ProductDetail = require("../components/ProductDetail");

var routes = (
  <Route handler={Main} >
    <Route path="/" handler={Home} />
    <Route path="/search/:search/location/:location" handler={ProductSearchResult} />
    <Route path="/product" handler={ProductDetail} />
  </Route>
);

module.exports = routes;

/*
var routes = (
  <Route handler={Main} >
    <Route name="login" handler={Login} />
    <Route name="logout" handler={Logout} />
    <Route name="register" handler={Register} />
    <Route name="dashboard" handler={Dashboard} />
    <Route name="home" path="/" handler={Home} />
  </Route>
);
*/