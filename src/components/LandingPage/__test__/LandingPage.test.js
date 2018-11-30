// React Libraries
import React from 'react';

// third-party libraries
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


// modules importation
import LandingPage from '../LandingPage';


configure({
  adapter: new Adapter(),
});

// SnapShot Test
describe('Renders the Landing page', () => {

  it('should render the landing page', () => {
    const component = shallow(
      <LandingPage />
    );
    expect(component).toMatchSnapshot();
  });
});