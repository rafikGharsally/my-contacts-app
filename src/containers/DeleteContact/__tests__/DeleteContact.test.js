import React from 'react';
import DeleteContact  from '../DeleteContact';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

describe('Delete Contact tests', () => {
  const store = configureStore([
    thunk,
  ])();

  it('renders without crashing', () => {
    const wrapper = shallow(
      <DeleteContact isFetching contacts={null} store={store} />
    ).dive();
    expect(wrapper.length).toEqual(1);
  });
});