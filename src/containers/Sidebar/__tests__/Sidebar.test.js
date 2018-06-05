import React from 'react';
import Sidebar  from '../Sidebar';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const store = configureStore([
  thunk,
])();

it('renders without crashing', () => {
  const wrapper = shallow(
    <Sidebar store={store} />
  ).dive();
  expect(wrapper.length).toEqual(1);
});