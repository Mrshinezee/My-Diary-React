// React Libraries
import React from 'react';
import { Provider } from 'react-redux';

// third-party libraries
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// components
import Logout from '../Logout';

// store
import configureStore from '../../../store/configureStore';

configure({ adapter: new Adapter() });

describe('Logout Component', () => {
  test('renders the Logout Component', () => {
    const store = configureStore();
    const wrapper = shallow(
    <Provider store={store}>
      <Logout />
    </Provider>
    );
    expect(wrapper.exists()).toBe(true);
  });
});
