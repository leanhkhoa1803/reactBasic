import React from "react";
import "./Nav.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <>
        <div className="topnav">
          <NavLink activeClassName="active" to="/" exact>
            Home
          </NavLink>
          <NavLink to="/todo" activeClassName="active">
            Todo
          </NavLink>
          <NavLink to="/user" activeClassName="active">
            User
          </NavLink>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </div>
      </>
    );
  }
}

export default Nav;
