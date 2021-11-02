import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";
import ListTodo from "../Todos/ListTodo";
class MyConmponent extends React.Component {
  state = {
    arrJob: [
      { id: "job1", title: "DEV", salary: "500" },
      { id: "job2", title: "PM", salary: "1500" },
      { id: "job3", title: "TESTER", salary: "400" },
    ],
  };
  addNewJob = (job) => {
    this.setState({
      arrJob: [...this.state.arrJob, job],
    });
  };
  deleteJob = (job) => {
    let currentJob = this.state.arrJob;
    currentJob = currentJob.filter((item) => item.id !== job.id);
    this.setState({
      arrJob: currentJob,
    });
  };
  render() {
    return (
      <>
        {/* // <AddComponent addNewJob={this.addNewJob} /> */}
        <ChildComponent arrJob={this.state.arrJob} deleteJob={this.deleteJob} />
      </>
    );
  }
}

export default MyConmponent;
