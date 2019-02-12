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
        <AddSmurf />
        {this.props.fetchingSmurf && <h2>Loading!</h2>}
        {!this.props.fetchingSmurfs && !this.props.fetchingError && (
          <SmurfList />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetchingSmurfs: state.fetchingSmurfs,
    fetchingError: state.fetchingError
  };
};

export default connect(
  mapStateToProps,
  { getSmurfs }
)(App);
