import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/color";
import image from "../../assets/images/superman_PNG9.png";
import { connect } from "react-redux";
class Home extends React.Component {
  state = {
    user: { id: "", name: "" },
    check_add: false,
  };
  handleDeleteUser = (item) => {
    this.props.deleteUserRedux(item);
  };
  handleAddUser = () => {
    this.setState({ check_add: !this.state.check_add });
  };
  handleChange = (event) => {
    let name = event.target.value;
    let id = Math.floor(Math.random() * 1001);
    this.setState({ user: { id: id, name: name } });
  };
  handleSaveUser = () => {
    let item = this.state.user;
    this.props.AddUserRedux(item);
    this.setState({ check_add: !this.state.check_add });
  };
  render() {
    let listUsers = this.props.dataRedux;
    let { check_add } = this.state;
    return (
      <>
        <div>Home Page</div>
        {/* <Color /> */}
        <div>
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <div key={item.id}>
                  {index + 1} - {item.name} &nbsp; &nbsp;
                  <span onClick={() => this.handleDeleteUser(item)}> X</span>
                </div>
              );
            })}
          {check_add ? (
            <>
              <input
                type="text"
                onChange={(event) => this.handleChange(event)}
              />{" "}
              &nbsp;
              <button onClick={() => this.handleSaveUser()}>Save</button>
            </>
          ) : (
            <button onClick={() => this.handleAddUser()}>Add New</button>
          )}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { dataRedux: state.users };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteUserRedux: (userDelete) =>
      dispatch({
        type: "deleteUser",
        payload: userDelete,
      }),
    AddUserRedux: (user) =>
      dispatch({
        type: "AddUser",
        payload: user,
      }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));
