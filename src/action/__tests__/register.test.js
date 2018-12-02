// third party library
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// actionType
import {
    REGISTER_SUCCESS,
    REGISTER_LOADING,
    REGISTER_FAILURE,
} from '../../actionTypes/login';
import { AUTHENTICATE_USER } from '../../actionTypes/auth';

// action
import {
    userRegisterRequest,
} from '../register';

const token = 'hbfhtjnhth- tnbnnbnjjjtj';
const data = { id: 1, roleId: 2 };
const errors = {}
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mock = new MockAdapter(axios);


describe('Actions related with login', () => {
  afterEach(() => {
    mock.reset();
  });
  it('User registration is successful', () => {
    mock.onPost('/api/v1/auth/signup')
      .reply(200, {
        data,
        token,
        status: 'success',
      });
      const auth = {
        user: data,
        token: `Bearer ${token}`
      }
    const mockedActions = [
      {
        type: REGISTER_LOADING,
        payload: true,
      },
      {
        type: REGISTER_SUCCESS,
      },
      {
        type: AUTHENTICATE_USER,
        payload: auth,
      },
    ];

    const store = mockStore({ auth: {} });
    return store.dispatch(userRegisterRequest())
      .then(() => {
        expect(store.getActions()).toEqual(mockedActions);
      });
  });
  it('User registration is unsuccessful', () => {
    mock.onPost('/api/v1/auth/signup')
      .reply(401, {
        status: 'failed',
        errors,
      });

    const mockedActions = [
      {
        type: REGISTER_LOADING,
        payload: true,
      },
      {
        type: REGISTER_FAILURE,
        payload: errors,
      },
    ];

    const store = mockStore({ auth: {} });
    return store.dispatch(userRegisterRequest())
      .then(() => {
        expect(store.getActions()).toEqual(mockedActions);
      });
  });
});
