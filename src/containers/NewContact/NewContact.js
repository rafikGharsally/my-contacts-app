import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AddContact, ContactForm } from '../../components/GenericPages/Contact';
import { addNewContact } from '../../actions/contact';

class NewContact extends Component {

  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit(contact) {

    const { addNewContact, history } = this.props;
    addNewContact(contact).then(success => {
     console.log('!success added a new contact---', success);
     history.push('/');
    }, error => {
      console.log('error adding a new contact---', error);
    })
  }

  render() {
    return (
      <AddContact title="Add contact" previousState="/">
        <ContactForm submitForm={this.submit} />
      </AddContact>

    );
  }
}

const mapStateToProps = state => {
  return {
  }
};


const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addNewContact }, dispatch);
};

export default connect(
  mapStateToProps, mapDispatchToProps)(NewContact);
