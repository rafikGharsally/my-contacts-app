import contacts from '../contacts';
import * as types from '../../constants/types';
let defaultState = {
  data: null,
  error: false,
  isFetching: false,
};
let mockedData = {  data :{contacts: { id: "1", name: "bebe" }}};

describe('contacts Reducer', () => {
  it('has a default state', () => {
    expect(contacts(undefined, { type: 'unexpected' })).toEqual(defaultState);
  });

  it('can handle FETCH_CONTACTS', () => {
    expect(
      contacts(undefined, {
        type: types.FETCH_CONTACTS,
      })
    ).toEqual({
      ...defaultState,
      isFetching: true
    });
  });

  it('can handle FETCH_CONTACTS_SUCCESS', () => {
    expect(
      contacts(undefined, {
        type: types.FETCH_CONTACTS_SUCCESS,
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

  it('can handle FETCH_CONTACTS_ERROR', () => {
    expect(
      contacts(undefined, {
        type: types.FETCH_CONTACTS_ERROR
      })
    ).toEqual({
      ...defaultState,
      error: true,
      data: null
    });
  });



});