/*
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
import axios from "axios";

export const LOADING_SMURFS = "LOADING_SMURFS";
export const GOT_SMURFS = "GOT_SMURFS";
export const GOT_FAILURE = "GOT_FAILURE";
export const ADDING_SMURF = "ADDING_SMURF";
export const ADD_SUCCESS = "ADD_SUCCESS";
export const ADD_FAILURE = "ADD_FAILURE";

export const getSmurfs = URL => dispatch => {
  dispatch({ type: LOADING_SMURFS });
  axios
    .get(URL)
    .then(response => dispatch({ type: GOT_SMURFS, smurfs: response.data }))
    .catch(err => dispatch({ type: GOT_FAILURE, error: err }));
};

export const addSmurf = (URL, smurf) => dispatch => {
  dispatch({ type: ADDING_SMURF });
  axios
    .post(URL, smurf)
    .then(response => console.log(response))
    .then(err => console.log(err));
};
