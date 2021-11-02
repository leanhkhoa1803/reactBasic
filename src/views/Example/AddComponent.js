import React from "react";

class AddComponent extends React.Component {
  state = {
    title: "",
    salary: "",
  };
  handleChangeJobTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  handleChangeSalary = (event) => {
    this.setState({
      salary: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.state.title || !this.state.salary) {
      alert("Input is require");
      return;
    }
    this.props.addNewJob({
      id: Math.floor(Math.random() * 1001),
      title: this.state.title,
      salary: this.state.salary,
    });
    this.setState({
      title: "",
      salary: "",
    });
  };
  render() {
    return (
      <>
        <form>
          <label htmlFor="fname">Job Title:</label>
          <br />
          <input
            type="text"
            id="fname"
            name="fname"
            value={this.state.title}
            onChange={(event) => this.handleChangeJobTitle(event)}
          />
          <br />
          <label htmlFor="lname">Salary:</label>
          <br />
          <input
            type="text"
            id="lname"
            name="lname"
            value={this.state.salary}
            onChange={(event) => this.handleChangeSalary(event)}
          />
          <br />
          <br />
          <input
            type="submit"
            value="Submit"
            onClick={(event) => this.handleSubmit(event)}
          />
          <br />
        </form>
      </>
    );
  }
}

export default AddComponent;
