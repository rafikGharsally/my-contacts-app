import * as contactsAction from '../contacts';

describe('contactsAction', () => {

  it('fetchContacts should be existing', () => {
    expect(contactsAction.fetchContacts()).toBeTruthy();
  });
});