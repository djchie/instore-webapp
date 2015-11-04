var express = require('express');
var React = require('react');
var Router = require('react-router');
var routes = require('./config/routes');
var path = require('path');

var app = express();

app.use(express.static(path.resolve(__dirname, '..', 'dist')));
app.get('/favicon.ico', (req, res) => res.send(''));
console.log('got here');
app.use((req, res) => {
  Router.run(routes, req.path, (Handler) => {
    res.send('<!DOCTYPE html>' + React.renderToString(<Handler path={req.path} />));
  });
});

var port = process.env.PORT || 5000;
console.log('listening...' + port);
app.listen(port);


// Router.run(routes, function(Handler){
//   React.render(<Handler /> , document.getElementById('app'));
// });


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