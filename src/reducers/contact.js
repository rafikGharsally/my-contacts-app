import * as types from '../constants/types';

export default function contact(state = {
  data: null,
  isFetching: false,
  error: false,
}, action) {
  switch (action.type) {
    case types.FETCH_CONTACT: {
      return {
        ...state,
        data: null,
        error: false,
        isFetching: true
      };
    }
    case types.FETCH_CONTACT_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: false,
        isFetching: false
      };
    case types.FETCH_CONTACT_ERROR:
      return {
        ...state,
        data: null,
        isFetching: false,
        error: true
      };

    default:
      return state;
  }

}