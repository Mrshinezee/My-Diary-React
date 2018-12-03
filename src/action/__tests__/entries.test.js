// third party library
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// actionType
import {
    LOAD_ENTRIES,
    GET_ENTRIES_SUCCESS,
  } from '../../actionTypes/entries';

// action
import getUserEntries from '../entries';

const entries = [];
const message = 'testin testing';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mock = new MockAdapter(axios);


describe('Actions related with getting a user entry', () => {
  afterEach(() => {
    mock.reset();
  });
  it('Get user entry successfully', () => {
    mock.onPost('/api/v1/entries')
      .reply(200, {
        entries,
        status: 'success',
      });

    const mockedActions = [
      {
        type: LOAD_ENTRIES,
      },
      {
        type: GET_ENTRIES_SUCCESS,
        payload: entries
      },
    ];

    const store = mockStore({ auth: {} });
    return store.dispatch(getUserEntries())
      .then(() => {
        expect(store.getActions()).toEqual(mockedActions);
      });
  });
  it('Get user entry not successful', () => {
    mock.onPost('/api/v1/entries')
      .reply(404, {
        status: 'failed',
        entries,
        message
      });

    const mockedActions = [
      {
        type: LOAD_ENTRIES,
      },
      {
        type: GET_ENTRIES_SUCCESS,
        payload: entries
      },
    ];

    const store = mockStore({ auth: {} });
    return store.dispatch(getUserEntries())
      .then(() => {
        expect(store.getActions()).toEqual(mockedActions);
      });
  });
});
