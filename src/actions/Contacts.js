import * as types from '../constants/types';
import { get } from "axios";

function fetching() {
  return { type: types.FETCHING_CONTACTS };
}

function fetchingError(error) {
  return { type: types.FETCH_CONTACTS_ERROR, error: error };
}

function fetched(contacts) {
  return { type: types.FETCH_CONTACTS_SUCCESS, payload: contacts };
}

function getContacts() {
  return get('/api/contacts');
}

export function fetchContacts() {
  return function (dispatch) {
    dispatch(fetching());
    return getContacts().then(
      response => dispatch(fetched(response.data.contacts)),
      error => dispatch(fetchingError(error.data))
    )
  }
}