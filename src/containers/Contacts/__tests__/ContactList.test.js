import React from 'react';
import ContactList  from '../ContactList';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import renderer from "react-test-renderer";
import { MemoryRouter as Router } from 'react-router-dom';

describe('Contacts', () => {
  const store = configureStore([
    thunk,
  ])();
  let fakeContacts = {
    data:[
      {
        "id": 1,
        "name": "Rafik Gharsalli",
        "job_title": "software engineer",
        "address": "1234 test test",
        "picture": "",
        "email": "rafikgharsally@gmail.com",
        "phone": "5145891865"
      }
    ]};

  it('renders without crashing', () => {
    const wrapper = shallow(
      <ContactList contacts={null} store={store} />
    ).dive();
    expect(wrapper.length).toEqual(1);
  });

  it('renders without crashing with a fake contact list', () => {
    const wrapper = shallow(
      <ContactList contacts={fakeContacts} store={store} />
    ).dive();
    expect(wrapper.length).toEqual(1);
    expect(wrapper.find('.contacts').length).toBe(1);
  });


  it('renders and matches our snapshot', () => {
    const component = renderer.create((<Router><ContactList store={store} /></Router>));
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});