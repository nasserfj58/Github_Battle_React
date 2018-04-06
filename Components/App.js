var React = require('react');
var Popular = require('./Popular.js');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Nav = require('./Nav');
var Home = require('./Home');
let Battle = require('./Battle');
let Switch = ReactRouter.Switch;
let Bootstrap = require('react-bootstrap');
let Grid = Bootstrap.Grid;
let Row = Bootstrap.Row;
let Col = Bootstrap.Col;
let Button = Bootstrap.Button;
let Jumbotron = Bootstrap.Jumbotron;

class App extends React.Component {
  constructor(){
    super();
    this.NotFound = NotFound.bind(this);
  }
  render() {
    return (
      <Router>
        <div className="container">
          <Nav />
          <Switch>
            <Route exact path='/popular' component={Popular} />
            <Route exact path='/' component={Home} />
            <Route exact path='/battle' component={Battle} />
            <Route component={this.NotFound} />
          </Switch>
        </div>
      </Router>
    )
  }
}
function NotFound (){
  return (<Grid>
    <Row className="show-grid">
      <Jumbotron>
        <h1>The Page is not found!</h1>
      </Jumbotron>
    </Row>
  </Grid>)
}
module.exports = App;
