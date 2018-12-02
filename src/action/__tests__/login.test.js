// third party library
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// actionType
import {
  LOGIN_SUCCESS,
  LOGIN_LOADING,
  LOGIN_FAILURE,
} from '../../actionTypes/login';
import { AUTHENTICATE_USER } from '../../actionTypes/auth';

// action
import {
  userLoginRequest,
} from '../login';

const user = { id: 1, roleId: 2 };
const token = 'hbfhtjnhth- tnbnnbnjjjtj';
const message = 'Password required.';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mock = new MockAdapter(axios);


describe('Actions related with login', () => {
  afterEach(() => {
    mock.reset();
  });
  it('User login is successful', () => {
    mock.onPost('/api/v1/auth/login')
      .reply(200, {
        user,
        token,
        status: 'success',
      });
      const auth = {
        user,
        token: `Bearer ${token}`
      }
    const mockedActions = [
      {
        type: LOGIN_LOADING,
        payload: true,
      },
      {
        type: LOGIN_SUCCESS,
      },
      {
        type: AUTHENTICATE_USER,
        payload: auth,
      },
    ];

    const store = mockStore({ auth: {} });
    return store.dispatch(userLoginRequest())
      .then(() => {
        expect(store.getActions()).toEqual(mockedActions);
      });
  });
  it('User login is unsuccessful', () => {
    mock.onPost('/api/v1/auth/login')
      .reply(401, {
        status: 'failed',
        message,
      });

    const mockedActions = [
      {
        type: LOGIN_LOADING,
        payload: true,
      },
      {
        type: LOGIN_FAILURE,
        payload: message,
      },
    ];

    const store = mockStore({ auth: {} });
    return store.dispatch(userLoginRequest())
      .then(() => {
        expect(store.getActions()).toEqual(mockedActions);
      });
  });
});
