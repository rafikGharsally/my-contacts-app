import React from 'react';
import ViewContact  from '../ViewContact';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

// Create the mock store
import configureMockStore from 'redux-mock-store';
const mockStore = configureMockStore();


const store = configureStore([
  thunk,
])();

describe('ViewContact', () => {
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
      <ViewContact store={store} />
    );
  });

  it('should isFetching to be truthy', () => {
    expect(wrapper.props().contact.isFetching).toBe(true);
    expect(wrapper.props().contact.error).toBe(false);
  });
});