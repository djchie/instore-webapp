var React = require('react');
var Router = require('react-router');
var routes = require('./config/routes');

Router.run(routes, function(Handler){
  React.render(<Handler /> , document.getElementById('app'));
});

/*
  To remove hashtag in URL...
  Add Router.HistoryLocation to second parameter of Router.run
  And you need to configure server side routing becuase of the reason in the below link:
    http://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writting-manually
  Also refer to these other links for help:
    http://ricostacruz.com/cheatsheets/react-router.html
    https://github.com/rackt/react-router/issues/1026
    https://github.com/rackt/react-router/issues/676
    http://stackoverflow.com/questions/28553904/client-routing-using-react-router-and-server-side-routing
*/