// Third party API
import axios from 'axios';

// import action types
import {
  LOAD_ENTRIES,
  GET_ENTRIES_SUCCESS,
} from '../actionTypes/entries';


const LoadingEntries = () => ({
    type: LOAD_ENTRIES,
  })

const getUserEntries = (token) => dispatch => {
  dispatch(LoadingEntries());
  const url = process.env.SERVER_URL || '';
  return axios
    .get(`${url}/api/v1/entries`,
      {
        headers: {
        'Content-Type': 'application/json',
          Authorization: token,
        }
      }
    )
    .then((response) => {
      dispatch({
        type: GET_ENTRIES_SUCCESS,
        payload: response.data
      })
    })
    .catch(() => {
      dispatch({
        type: GET_ENTRIES_SUCCESS,
        payload: []
      })
    });
};

export default getUserEntries;
