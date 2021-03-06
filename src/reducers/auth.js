// state
import initialState from '../store/initialState';

// reducer
import loginReducer from './login';

// action types
import {
  AUTHENTICATE_USER,
  LOGOUT_USER
}
  from '../actionTypes/auth';

/**
 *
 * @param {object} state
 * @param {string} action
  * @desc login reducer
 * @returns {object} type
 */
const authReducer = (state = initialState.auth, action) => {
  switch (action.type) {
    case AUTHENTICATE_USER:
      return {
        ...state,
        user: action.payload.user,
        isAuth: true,
        token: action.payload.token,
      };
    case LOGOUT_USER:
      return {
        ...state,
        user: {},
        isAuth: false,
        token: '',
      };
    default:
      return {
        ...state,
        login: loginReducer(state.login, action)
      };
  }
};

export default authReducer;
