import React from "react";
import { connect } from "react-redux";
import Smurf from "./Smurf";

const SmurfList = props => {
  return (
    <div className="smurf-list">
      <h1>Smurfs!</h1>
      {props.smurfs.map(smurf => (
        <Smurf key={smurf.id} smurf={smurf} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};

export default connect(mapStateToProps)(SmurfList);
