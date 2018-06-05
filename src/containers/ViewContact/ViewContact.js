import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getContact, modifyContact } from '../../actions/contact';
import { AddContact, ContactForm } from '../../components/GenericPages/Contact';

class ViewContact extends Component {

  componentDidMount() {
    const { getContact, match: { params } } = this.props;
    getContact(params.id);
  }

  render() {
    const { contact }  = this.props;

    if (contact.isFetching) {
      return (
        <div>loading ....</div>
      );
    }
    return (
      <AddContact title="View contact" previousState="/">
        <ContactForm
          contact={contact.data}
          viewMode
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

export default connect(
  mapStateToProps, mapDispatchToProps)(ViewContact);

