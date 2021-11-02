import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

class DetailUser extends React.Component {
  state = {
    user: {},
  };
  async componentDidMount() {
    if (this.props.match && this.props.match.params) {
      let id = this.props.match.params.id;
      try {
        let res = await axios.get(`https://reqres.in/api/users/${id}`);
        this.setState({
          user: res.data.data ? res.data.data : {},
        });
      } catch (error) {
        console.log(error);
      }
    }
  }
  handleBack = () => {
    this.props.history.push("/user");
  };
  render() {
    let { user } = this.state;
    let isEmptyObj = Object.keys(user).length === 0;

    return (
      <>
        {!isEmptyObj && (
          <>
            <div>
              User name : {user.first_name} {user.last_name}
            </div>
            <div>Email : {user.email}</div>
            <img src={user.avatar} />

            <div>
              <button type="button" onClick={() => this.handleBack()}>
                Back
              </button>
            </div>
          </>
        )}
      </>
    );
  }
}

export default withRouter(DetailUser);
