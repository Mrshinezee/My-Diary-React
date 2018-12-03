// actionType
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
    CLEAR_ENTRY_MESSAGE,
  } from '../../actionTypes/entry';
  
  // reducer
  import reducer from '../entry';
  
  const entry = {};
  
  describe('login reducer', () => {
    it('should return the initial state', () => {
      expect(reducer(undefined, {})).toEqual(
        {
          entry: {},
          loading: false,
          error: '',
        }
      );
    });
    it('should load create entry', () => {
      expect(
        reducer([], {
          type: CREATE_ENTRY,
          payload: true
        })
      ).toEqual(
        {
          loading: true,
        }
      );
    });
    it('should obtain the users entry', () => {
      expect(
        reducer([], {
          type: CREATE_ENTRY_SUCCESS,
          payload: entry
        })
      ).toEqual(
        {
         loading: false,
         entry
        }
      );
    });
  });
  