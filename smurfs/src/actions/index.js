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

export const getSmurfs = URL => dispatch => {
  dispatch({ type: LOADING_SMURFS });
  axios
    .get(URL)
    .then(response => console.log(response))
    .catch(err => console.log(err));
};
