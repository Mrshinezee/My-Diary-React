// state
import initialState from '../store/initialState';
 // action types
import {
    LOAD_ENTRIES,
    GET_ENTRIES_SUCCESS,
  } from '../actionTypes/entries';
  
  const entriesReducer = (state = initialState.userEntry, action) => {
    switch (action.type) {
      case LOAD_ENTRIES:
        return {
          ...state,
          loading: true
        };
      case GET_ENTRIES_SUCCESS:
        return {
          ...state,
          entries: action.payload,
          loading: false
        };
      default:
        return state;
    }
  }
  
  export default entriesReducer;
