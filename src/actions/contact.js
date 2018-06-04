import * as types from '../constants/types';
import axios from 'axios';

const addContact = () => { return { type: types.ADD_CONTACT }};
const addContactSuccess = () => { return { type: types.ADD_CONTACT_SUCCESS }};
const addContactError = () => { return { type: types.ADD_CONTACT_ERROR }};
