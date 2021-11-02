import React from "react";

class ChildComponent extends React.Component {
  state = {
    showJob: false,
  };
  handleShowJob = () => {
    this.setState({ showJob: !this.state.showJob });
  };
  handleDeleteJob = (job) => {
    this.props.deleteJob(job);
  };
  render() {
    let { arrJob } = this.props;
    let { showJob } = this.state;
    // let check = showJob ? "showJob = true" : "showJob = false";
    return (
      <>
        {showJob === false ? (
          <div>
            <button onClick={() => this.handleShowJob()}>Show</button>
          </div>
        ) : (
          <>
            <div>
              {arrJob.map((item) => {
                if (item.salary >= 500) {
                  return (
                    <li key={item.id}>
                      {item.title}- {item.salary} &nbsp;
                      <span onClick={() => this.handleDeleteJob(item)}>x</span>
                    </li>
                  );
                }
              })}
            </div>
            <div>
              <button onClick={() => this.handleShowJob()}>Hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}

export default ChildComponent;
