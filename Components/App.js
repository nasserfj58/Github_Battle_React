var React = require('react');
var Popular = require('./Popular.js');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Nav = require('./Nav.js');
var Home = require('./Home.js');


class App extends React.Component {
  render(){
    return (
      <Router>
        <div className="container">
        <Nav/>
        <Route exact path='/' component={Home}/>
        <Route path='/popular' component={Popular}/>
        
      </div>
      </Router>
        

     )
  }
}
module.exports = App;
