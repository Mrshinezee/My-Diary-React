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

const getUserEntries = () => dispatch => {
  dispatch(LoadingEntries());
  const token = localStorage.getItem('diaryToken');
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
    .catch((error) => {
      dispatch({
        type: GET_ENTRIES_SUCCESS,
        payload: []
      })
    });
};

export default getUserEntries;
