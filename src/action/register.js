// third party library
import axios from 'axios';

// actionType
import {
  REGISTER_SUCCESS,
  REGISTER_LOADING,
  REGISTER_FAILURE,
  REGISTER_ERROR_CLEARED
} from '../actionTypes/login';

// action
import { authenticateUser } from './auth';

/**
 * @desc checking successful login
 * @returns {object} type
*/
export function success() {
  return {
    type: REGISTER_SUCCESS,
  };
}
/**
 * @param {object} data
 * @desc checking unsuccessful login
 * @returns {object} type
*/
export function failure(data) {
  return {
    type: REGISTER_FAILURE,
    payload: data
  };
}
/**
 * @param {object} data
 * @desc clear error while login
 * @returns {object} type
*/
export function clearError() {
  return {
    type: REGISTER_ERROR_CLEARED,
  };
}

export const userRegisterRequest = userData => (dispatch) => {
  dispatch({
    type: REGISTER_LOADING,
    payload: true
  });
  const url = process.env.SERVER_URL || '';
  return axios.post(`${url}/api/v1/auth/signup`, userData)
    .then((userPayload) => {
        dispatch(success());
        dispatch(authenticateUser(userPayload.data.data));
        localStorage.setItem('diaryToken', `Bearer ${userPayload.data.token}`);
        localStorage.setItem('diaryName', userPayload.data.firstName);
        const user = JSON.stringify(userPayload.data.data);
        localStorage.setItem('diaryUser', user);
    })
    .catch((err) => {
      dispatch(failure(err.response.data.errors));
    });
};
