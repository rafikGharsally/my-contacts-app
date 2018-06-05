import React from 'react';
import EditContact  from '../EditContact';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

// Create the mock store
import configureMockStore from 'redux-mock-store';
const mockStore = configureMockStore();

const store = configureStore([
  thunk,
])();

describe('EditContact', () => {
  let wrapper, store;

  beforeEach(() => {
    const initialState = {
      contact: {
        data: {"id":1,"name":"Rafik dragon"},
        isFetching:true,
        error:false
      }
    };
    store = mockStore(initialState);
    // Shallow render the container passing in the mock store
    wrapper = shallow(
      <EditContact store={store} />
    );
  });

  it('should isFetching to be truthy', () => {
    expect(wrapper.props().contact.isFetching).toBe(true);
    expect(wrapper.props().contact.error).toBe(false);
  });
});