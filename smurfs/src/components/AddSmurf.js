import React, { Component } from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions";

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
    this.props.addSmurf("http://localhost:3333/smurfs", this.state);
  };

  render() {
    return (
      <div className="add-smurf-wrapper">
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
        {this.props.error && <h2>{this.props.error}</h2>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.addError
  };
};

export default connect(
  mapStateToProps,
  { addSmurf }
)(AddSmurf);
