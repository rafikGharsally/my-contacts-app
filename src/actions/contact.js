import * as types from '../constants/types';
import axios from 'axios';

const addContact = () => { return { type: types.ADD_CONTACT }};
const addContactSuccess = () => { return { type: types.ADD_CONTACT_SUCCESS }};
const addContactError = () => { return { type: types.ADD_CONTACT_ERROR }};


const fetchContact = () => { return { type: types.FETCH_CONTACT } };
const fetchContactSuccess = data => { return { type: types.FETCH_CONTACT_SUCCESS, payload: data } };
const fetchContactError = error => { return { type: types.FETCH_CONTACT_ERROR, error } };

const editContact = () => { return { type: types.EDIT_CONTACT } };
const editContactSuccess = data => { return { type: types.EDIT_CONTACT_SUCCESS, payload: data } };
const editContactError = error => { return { type: types.EDIT_CONTACT_ERROR, error } };




export const addNewContact = contact => {
  console.log('contact in action',contact);
  return function(dispatch) {
    return new Promise((resolve, reject) => {
      dispatch(addContact());
      axios.post('/api/contacts', contact )
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


export const modifyContact = contact => {
  return function(dispatch) {
    return new Promise((resolve, reject) => {
      dispatch(editContact());
      axios.put(`/api/contacts/${id}`, contact )
        .then(success => {
          dispatch(editContactSuccess(success.data));
          resolve(success.data);
        }, error => {
          console.log('error in addNewContact action:', error);
          dispatch(editContactError(error));
          reject(error);
        });
    })
  }
};


export const getContact = id => {
  return function(dispatch) {
    return new Promise((resolve, reject) => {
      dispatch(fetchContact());
      axios.get(`/api/contacts/${id}` )
        .then(success => {
          dispatch(fetchContactSuccess(success.data));
          resolve(success.data);
        }, error => {
          console.log('error in getContact action:', error);
          dispatch(fetchContactError(error));
          reject(error);
        });
    })
  }
};