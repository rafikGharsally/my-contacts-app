import * as types from '../constants/types';


//myserver:8080/API/contacts
const getUsers = () => {
  return {
    type: types.FETCH_USERS,
    payload: {
      request: {
        url: '/API/contacts'
      }
    }
  };
};


export function fetchUsers() {
  return getUsers();
}
