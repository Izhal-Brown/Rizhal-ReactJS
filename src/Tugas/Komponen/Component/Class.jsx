import React from "react";

class TugasClass extends React.Component{
  state = {
      title: "Belajar Reactjs",
  };

  render() {
    return (
      <div>
        <h1 align="center">{this.state.title}</h1>
      </div>
    );
  }
}

export default TugasClass;