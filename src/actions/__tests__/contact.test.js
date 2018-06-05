import * as contactAction from '../contact';

describe('contactAction', () => {

  it('modifyContact should be existing', () => {
    expect(contactAction.addNewContact()).toBeTruthy();
  });

  it('modifyContact should be existing', () => {
    expect(contactAction.modifyContact()).toBeTruthy();
  });

  it('getContact should be existing', () => {
    expect(contactAction.getContact()).toBeTruthy();
  });

  it('deleteContact should be existing', () => {
    expect(contactAction.deleteContact()).toBeTruthy();
  });

});