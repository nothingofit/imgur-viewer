var React = require("react");
var ReactRouter = require("react-router");
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var HashHistory = require('react-router/lib/HashHistory');

var Main = require("./components/main");
var Topic = require("./components/topic");
var ImageDetail = require("./components/image-detail");

module.exports = (
  <Router history={new HashHistory}>
    <Route path="/" component={Main}>
      <Route path="topics/:id" component={Topic} />
      <Route path="images/:id" component={ImageDetail} />
    </Route>
  </Router>
)

// var element = React.createElement(Hello, {});

