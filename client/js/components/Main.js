var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

var Main = React.createClass({
  render: function(){
    return (
      <span>
        <nav className="navbar navbar-default navbar-static-top" style={styles.navBar}>
          <div className="container" style={styles.navBarContentContainer}>
            <div className="navbar-header" style={styles.logo}>
              <Link to="home" className="navbar-brand"> InStore </Link>
            </div>
            <ul className="nav navbar-nav pull-right" style={styles.menu}>
              <li><Link to="home" className="navbar-brand"> Home </Link></li>
              <li><Link to="productSearchResult" className="navbar-brand"> Search </Link></li>
              <li><Link to="productDetail" className="navbar-brand"> Product </Link></li>
            </ul>
          </div>
        </nav>
        <RouteHandler />
      </span>
    )
  }
});

var styles = {
  navBar: {
    marginBottom: 0,
    borderColor: '#64cce7',
    height: 60
  },
  navBarContentContainer: {
    marginLeft: 0,
    marginRight: 0,
    width: '100%',
    height: '100%'
  },
  logo: {
    paddingTop: 5
  },
  menu: {
    paddingTop: 5
  }
};

module.exports = Main;