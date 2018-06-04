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

    const { contact: { data } } = this.props;
    return (

      <AddContact title="Edit contact" previousState="/">
        <ContactForm
          contact={data}
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

export default connect(
  mapStateToProps, mapDispatchToProps)(EditContact);

