import React, { Component } from "react";
import { connect } from "react-redux";

class AddSmurf extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitHandler = e => {
    e.preventDefault();
  };

  render() {
    return (
      <form className="add-smurf-form" onSubmit={this.submitHandler}>
        <input
          type="text"
          value={this.state.name}
          name="name"
          placeholder="Smurf"
          onChange={this.changeHandler}
        />
        <input
          type="text"
          value={this.state.age}
          name="age"
          placeholder="Age"
          onChange={this.changeHandler}
        />
        <input
          type="text"
          value={this.state.height}
          name="height"
          placeholder="Height"
          onChange={this.changeHandler}
        />
        <button>Smurf!</button>
      </form>
    );
  }
}

export default connect()(AddSmurf);
