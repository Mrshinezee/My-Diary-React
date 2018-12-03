import {
   GET_ENTRY,
   GET_ENTRY_SUCCESS,
   UPDATE_ENTRY,
   UPDATE_ENTRY_SUCCESS,
   DELETE_ENTRY,
   DELETE_ENTRY_SUCCESS,
   CREATE_ENTRY,
   CREATE_ENTRY_SUCCESS,
   ENTRY_FAILURE,
   CLEAR_ENTRY_MESSAGE,
  } from '../actionTypes/entry';
  
  export const initialState = {
    entry: {},
    loading: false,
    error: '',
  };
  
  const entryReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_ENTRY:
        return {
          ...state,
          loading: true
        };
      case GET_ENTRY_SUCCESS:
        return {
          ...state,
          entry: action.payload,
          loading: false
        };
      case UPDATE_ENTRY:
        return {
          ...state,
          loading: true
        };
      case UPDATE_ENTRY_SUCCESS:
        return {
          ...state,
          entry: action.payload,
          loading: false
        };
      case CREATE_ENTRY:
        return {
          ...state,
          loading: true
        };
      case CREATE_ENTRY_SUCCESS:
        return {
          ...state,
          entry: action.payload,
          loading: false
        };
      case DELETE_ENTRY:
        return {
          ...state,
          loading: true
        };
      case DELETE_ENTRY_SUCCESS:
        return {
          ...state,
          entry: {}
        };
      case CLEAR_ENTRY_MESSAGE:
        return {
          ...state,
          entry: {}
        };
      case ENTRY_FAILURE:
        return {
          ...state,
          processing: false,
          error: action.payload
        };  
      default:
        return state;
    }
  }
  
  export default entryReducer;
  