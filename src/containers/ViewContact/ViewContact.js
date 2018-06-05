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

  render() {

    const { contact, isFetching }  = this.props;

    if (isFetching) {
      return (
        <div>loading ....</div>
      );
    }

    return (

      <AddContact title="View contact" previousState="/">
        <ContactForm
          contact={contact}
          viewMode
        />
      </AddContact>

    );
  }
}

const mapStateToProps = state => {
  return {
    isFetching: state.contact.isFetching,
    contact: state.contact.data
  }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getContact, modifyContact }, dispatch);
};

export default connect(
  mapStateToProps, mapDispatchToProps)(EditContact);

