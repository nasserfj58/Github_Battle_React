var React = require('react');
var NavLink = require('react-router-dom').NavLink;
var Nav1 = require('react-bootstrap').Nav;
var NavItem = require('react-bootstrap').NavItem;

function Nav() {
    return (
        <Nav1 bsStyle="pills">
         <li><NavLink exact className="active" to='/'>Home</NavLink></li>
         <li><NavLink className="active" to='/popular'>Papoular</NavLink></li>
         <li><NavLink className="active" exact to='/battle'>Battle</NavLink></li>         
        </Nav1>

    )
}
module.exports = Nav;