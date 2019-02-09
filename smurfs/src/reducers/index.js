/*
  Be sure to import in all of the action types from `../actions`
*/
import { LOADING_SMURFS, GOT_SMURFS, GOT_FAILURE } from "../actions";

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this*/
const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOADING_SMURFS:
      return { ...state, fetchingSmurfs: true };
    case GOT_SMURFS:
      return { ...state, fetchingSmurfs: false, smurfs: action.smurfs };
    case GOT_FAILURE:
      return { ...state, error: action.error };
    default:
      return state;
  }
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer.
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
