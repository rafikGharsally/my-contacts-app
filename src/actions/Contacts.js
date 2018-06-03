import * as types from '../constants/types';
import { get } from "axios";

export function fetchContacts() {

  get('/api/contacts').then((response) => {
    console.log('response',response);
  });
}