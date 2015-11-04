import React from 'react';
import Router from 'react-router';
import routes from './config/routes';

Router.run(routes, Router.HistoryLocation, (Handler) => {
  React.render(<Handler path={window.location.pathname} />, document.getElementById('app'));
});