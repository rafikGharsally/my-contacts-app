import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchContacts } from '../../actions/contacts';
import { contacts as GenericContacts  } from '../../components/GenericPages/Contacts';

class ContactList extends Component {

  componentDidMount() {

    this.props.fetchContacts();
    return new Promise(() => {
      this.props.fetchContacts();
    });
    }

  render() {
    const { contacts } = this.props;
    const found = contacts && contacts.data && contacts.data.length > 0;

    return (
      <div className="contacts">
        { !found &&
        <h3>No contacts to display...</h3>
        }
        {found &&
          <GenericContacts contacts={contacts} />
        }
      </div>

    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchContacts }, dispatch);
};


const mapStateToProps = state => {
  return {
    contacts: state.contacts
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

