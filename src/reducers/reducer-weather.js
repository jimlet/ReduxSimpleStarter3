import { actionTypes } from '../actions/index';

export default function(state = [], action) {
  // console.log(action);

  switch (action.type) {
    case actionTypes.FETCH_WEATHER:
      // NEVER do this because it mutates state.
      // state.push(action.payload.data);

      // Make a new array and return that as state
      // This is ok, but it's not as cool as the spread operator:
      // return state.concat([action.payload.data]);
      return [action.payload.data, ...state];
  }
  
  return state;
}