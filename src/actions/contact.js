import * as types from '../constants/types';
import axios from 'axios';

const addContact = () => { return { type: types.ADD_CONTACT }};
const addContactSuccess = () => { return { type: types.ADD_CONTACT_SUCCESS }};
const addContactError = () => { return { type: types.ADD_CONTACT_ERROR }};

export const addNewContact = contact => {
  console.log('contact in action',contact);
  return function(dispatch) {
    return new Promise((resolve, reject) => {
      dispatch(addContact());
      axios.post('/api/contacts', contact)
        .then(success => {
          dispatch(addContactSuccess(success.data));
          resolve(success.data);
        }, error => {
          console.log('error in addNewContact action:', error);
          dispatch(addContactError(error));
          reject(error);
        });
    })
  }
};
