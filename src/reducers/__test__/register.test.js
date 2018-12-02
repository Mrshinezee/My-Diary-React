// actionType
import {
    REGISTER_SUCCESS,
    REGISTER_LOADING,
    REGISTER_FAILURE,
  }
    from '../../actionTypes/login';
  
  // reducer
  import reducer from '../register';
  
  const errors = {};
  
  describe('login reducer', () => {
    it('should return the initial state', () => {
      expect(reducer(undefined, {})).toEqual(
        {
          processing: false,
          errors: {}
        }
      );
    });
    it('should makes registration request', () => {
      expect(
        reducer([], {
          type: REGISTER_LOADING,
          payload: true
        })
      ).toEqual(
        {
          processing: true,
        }
      );
    });
    it('should run on successful registration', () => {
      expect(
        reducer([], {
          type: REGISTER_SUCCESS,
        })
      ).toEqual(
        {
          processing: false,
          errors: {}
        }
      );
    });
    it('should run on unsuccessful register', () => {
      expect(
        reducer([], {
          type: REGISTER_FAILURE,
          payload: errors
        })
      ).toEqual(
        {
          processing: false,
          errors
        }
      );
    });
  });
  