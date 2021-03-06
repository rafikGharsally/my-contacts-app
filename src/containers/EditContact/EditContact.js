import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getContact, modifyContact } from '../../actions/contact';
import { AddContact, ContactForm } from '../../components/GenericPages/Contact';


class EditContact extends Component {

  componentDidMount() {
    const { getContact, match: { params } } = this.props;
    getContact(params.id);
  }

  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit(contact) {
    const { modifyContact, history } = this.props;
    modifyContact(contact).then(success => {
      console.log('success contact updated---', success);
      history.push('/');
    }, error => {
      console.log('error updating contact---', error);
    })
  }

  render() {

    const { contact }  = this.props;

    if (contact.isFetching) {
      return (
        <div>loading ....</div>
      );
    }

    return (

      <AddContact title="Edit contact" previousState="/">
        <ContactForm
          contact={contact.data}
          submitForm={this.submit}
        />
      </AddContact>

    );
  }
}

const mapStateToProps = state => {
  return {
    contact: state.contact
  }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getContact, modifyContact }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(EditContact);

