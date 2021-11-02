import logo from "./logo.svg";
import "./App.scss";
import React from "react";
import MyConmponent from "./Example/MyComponent";
import { ToastContainer, toast } from "react-toastify";
import Nav from "./Nav/Nav";
import Home from "./Example/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ListTodo from "./Todos/ListTodo";
import ListUser from "./User/ListUser";
import DetailUser from "./User/DetailUser";
class App extends React.Component {
  // state = {
  //   name: "Hello",
  // };
  handleBtn = () => {
    alert("Please");
  };
  handleChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/todo">
                <ListTodo />
              </Route>
              <Route path="/user" exact>
                <ListUser />
              </Route>
              <Route path="/user/:id">
                <DetailUser />
              </Route>
              <Route path="/about">
                <MyConmponent />
              </Route>
            </Switch>
          </header>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          {/* Same as */}
          <ToastContainer />
        </div>
      </Router>
    );
  }
}

export default App;
