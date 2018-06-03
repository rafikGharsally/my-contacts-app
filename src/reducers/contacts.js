import * as types from '../constants/types';

export default function contacts(state = {
  data: null,
  isFetching: false,
  error: false,
}, action) {
  switch (action.type) {
    case types.FETCH_CONTACTS: {
      return {
        ...state,
        data: null,
        error: false,
        isFetching: true
      };
    }
    case types.FETCH_CONTACTS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: false,
        isFetching: false
      };
    default:
      return state;
  }
}