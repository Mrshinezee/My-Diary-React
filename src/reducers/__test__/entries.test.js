// actionType
import {
    LOAD_ENTRIES,
    GET_ENTRIES_SUCCESS,
  }
    from '../../actionTypes/entries';
  
  // reducer
  import reducer from '../entries';
  
  const entries = [];
  
  describe('login reducer', () => {
    it('should return the initial state', () => {
      expect(reducer(undefined, {})).toEqual(
        {
          loading: false,
          entries: []
        }
      );
    });
    it('should load users entry', () => {
      expect(
        reducer([], {
          type: LOAD_ENTRIES,
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
          type: GET_ENTRIES_SUCCESS,
          payload: entries
        })
      ).toEqual(
        {
         loading: false,
          entries
        }
      );
    });
  });
  