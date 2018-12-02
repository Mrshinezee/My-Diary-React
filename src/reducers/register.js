// state
import initialState from '../store/initialState';

// action types
import {
  REGISTER_SUCCESS,
  REGISTER_LOADING,
  REGISTER_FAILURE,
  REGISTER_ERROR_CLEARED
}
  from '../actionTypes/login';

/**
 * @param {object} state
 * @param {string} action
 * @desc login reducer
 * @returns {object} type
 */
const registerReducer = (state = initialState.auth.signup, action) => {
  switch (action.type) {
    case REGISTER_LOADING:
      return {
        ...state,
        processing: action.payload,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        processing: false,
        errors: {}
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        processing: false,
        errors: action.payload
      };
    case REGISTER_ERROR_CLEARED:
      return {
        ...state,
        errors: {}
      };
    default:
      return state;
  }
};

export default registerReducer;
