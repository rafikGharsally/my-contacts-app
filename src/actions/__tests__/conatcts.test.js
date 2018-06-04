import * as contactsAction from '../Contacts';

describe('contactsAction', () => {

  it('fetchContacts should be existing', () => {
    expect(contactsAction.fetchContacts()).toBeTruthy();
  });
});