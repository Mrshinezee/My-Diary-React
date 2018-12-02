// Third party API
import axios from 'axios';

// import action types
import {
  GET_ENTRY,
  GET_ENTRY_SUCCESS,
  UPDATE_ENTRY,
  UPDATE_ENTRY_SUCCESS,
  CREATE_ENTRY,
  CREATE_ENTRY_SUCCESS,
  DELETE_ENTRY,
  DELETE_ENTRY_SUCCESS,
  ENTRY_FAILURE,
} from '../actionTypes/entry';

const processGetEntry = () => ({
  type: GET_ENTRY,
})

const processDeleteEntry = () => ({
  type: DELETE_ENTRY,
})

const processUpdateEntry = () => ({
  type: UPDATE_ENTRY,
})
const processCreateEntry = () => ({
  type: CREATE_ENTRY,
})
const entryFailure = (data) => ({
  type: ENTRY_FAILURE,
  payload: data
})

// Get Entry
export const getEntry = (id) => dispatch => {
  const token = localStorage.getItem('diaryToken');
  dispatch(processGetEntry());
  const url = process.env.SERVER_URL || '';
  return axios
    .get(`${url}/api/v1/entry/${id}`,
      {
        headers: {
          Authorization: token,
        }
      }
    )
    .then((response) => {
      dispatch({
        type: GET_ENTRY_SUCCESS,
        payload: response.data
      })
      return response.data;
    })
    .catch(error => {
      console.log(error)
    });
};

// Make Entry
export const createEntry = diaryData => (dispatch) => {
  const token = localStorage.getItem('diaryToken');
  dispatch(processCreateEntry());
  const url = process.env.SERVER_URL || '';
  return axios.post(`${url}/api/v1/entries/`, diaryData,
  {
    headers: {
      Authorization: token,
    }
  }
  )
    .then((diaryPayload) => {
      dispatch({
        type: CREATE_ENTRY_SUCCESS,
        payload: diaryPayload.data
      })
    })
    .catch((err) => {
      dispatch(entryFailure(err.response.data.message));
    });
};

// Update Entry
export const updateEntry = (update, id) => dispatch => {
  const token = localStorage.getItem('diaryToken');
  dispatch(processUpdateEntry());
  const url = process.env.SERVER_URL || '';
  return axios
    .put(`${url}/api/v1/entries/${id}`, update,
      {
        headers: {
          Authorization: token,
        }
      }
    )
    .then((response) => {
      dispatch({
        type: UPDATE_ENTRY_SUCCESS,
        payload: response.data
      })
    })
    .catch(error => {
      console.log(error)
    });
};


// Delete Entry
export const deleteEntry = (id) => dispatch => {
  const token = localStorage.getItem('diaryToken');
  dispatch(processDeleteEntry());
  const url = process.env.SERVER_URL || '';
  return axios
    .delete(`${url}/api/v1/entries/${id}`,
      {
        headers: {
          Authorization: token,
        }
      }
    )
    .then((response) => {
      dispatch({
        type: DELETE_ENTRY_SUCCESS,
        payload: response.data
      })
    })
    .catch(error => {
      console.log(error)
    });
};
