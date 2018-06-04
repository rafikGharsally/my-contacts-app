import React, { Component } from 'react';
import { AddContact, ContactForm } from '../../components/GenericPages/Contact';



class NewContact extends Component {



  render() {


    return (
      <AddContact title="Add contact" previousState="/">
        <ContactForm />
      </AddContact>

    );
  }
}




export default NewContact;