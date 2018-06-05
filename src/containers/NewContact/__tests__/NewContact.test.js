import React from 'react';
import NewContact  from '../NewContact';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import renderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom';


// Create the mock store
import configureMockStore from 'redux-mock-store';
const mockStore = configureMockStore();

const store = configureStore([
  thunk,
])();

describe('NewContact', () => {
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
      <NewContact store={store} />
    );
  });

  it('should be truthy', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('renders and matches our snapshot', () => {
    const component = renderer.create((<Router><NewContact store={store} /></Router>));
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});



