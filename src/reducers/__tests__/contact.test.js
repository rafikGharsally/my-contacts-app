import contact from '../contact';
import * as types from '../../constants/types';
let defaultState = {
  data: null,
  error: false,
  isFetching: false,
};
let mockedData = { data : {
    "id": 1,
    "name": "Rafik Gharsalli",
    "job_title": "software engineer",
    "address": "1234 test test",
    "picture": "",
    "email": "rafikgharsally@gmail.com",
    "phone": "5145891865"
  }
};

describe('contacts Reducer', () => {
  it('has a default state', () => {
    expect(contact(undefined, { type: 'unexpected' })).toEqual(defaultState);
  });

  it('can handle FETCH_CONTACT', () => {
    expect(
      contact(undefined, {
        type: types.FETCH_CONTACT,
      })
    ).toEqual({
      ...defaultState,
      isFetching: true
    });
  });

  it('can handle FETCH_CONTACT_SUCCESS', () => {
    expect(
      contact(undefined, {
        type: types.FETCH_CONTACT_SUCCESS,
        payload: {
          data: mockedData.data,
        }
      })
    ).toEqual({
      ...defaultState,
      error: false,
      data: mockedData
    });
  });

  it('can handle FETCH_CONTACT_ERROR', () => {
    expect(
      contact(undefined, {
        type: types.FETCH_CONTACT_ERROR
      })
    ).toEqual({
      ...defaultState,
      error: true,
      data: null
    });
  });
});