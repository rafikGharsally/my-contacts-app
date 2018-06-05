import React from 'react';
import ContactList  from '../ContactList';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

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