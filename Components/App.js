var React = require('react');
var Popular = require('./Popular.js');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;

class App extends React.Component {
  render(){
    return (
        <Popular/>

     )
  }
}
module.exports = App;
