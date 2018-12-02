import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import LoginPage from '../LoginPage';

let wrapper;
configure({ adapter: new Adapter() });
describe('Login component', () => {

  beforeEach(() => {
    const props = {
      login: jest.fn(),
      errors: {},
      auth: {
        isAuthenticated: true
      },
      history: {
        push: jest.fn()
      }
    };
    wrapper = shallow(
        <LoginPage {...props} />
    );
  });

  test("renders the Login component", () => { 
    expect(wrapper.exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });
})
