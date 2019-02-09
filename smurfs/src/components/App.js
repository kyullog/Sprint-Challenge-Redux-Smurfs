import React, { Component } from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../actions";
import SmurfList from "./SmurfList";
import AddSmurf from "./AddSmurf";
import "./App.css";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own.
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    this.props.getSmurfs("http://localhost:3333/smurfs");
  }
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <AddSmurf />
        {this.props.fetchingSmurf && <h2>Loading!</h2>}
        {!this.props.fetchingSmurfs && <SmurfList />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetchingSmurfs: state.fetchingSmurfs
  };
};

export default connect(
  mapStateToProps,
  { getSmurfs }
)(App);
