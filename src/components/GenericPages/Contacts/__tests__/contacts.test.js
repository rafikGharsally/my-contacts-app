import React from 'react';
import contacts  from '../contacts';
import renderer from "react-test-renderer";


describe('Contacts test suit', () => {

  let fakeContacts = {
    data:[
      {
        "id": 1,
        "name": "Rafik Gharsalli",
        "job_title": "software engineer",
        "address": "1234 test test",
        "picture": "",
        "email": "rafikgharsally@gmail.com",
        "phone": "5145891865"
      }
    ],
    error:false
  };

  // TODO fix tests
  // component need to be refactored to make it work ---- because the component is wrapped 'withStyles' o
  // or add create a theme provider

  // it('renders without crashing --- here', () => {
  //
  //   const wrapper = shallow(
  //     <contacts contacts={fakeContacts}/>
  //   );
  //   wrapper.find('#view').first().simulate('click');
  //   expect(history.push).toHaveBeenCalledWith('/view');
  // });


  it('renders and matches our snapshot', () => {
    const component = renderer.create((<contacts contacts={fakeContacts} />));
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });


});