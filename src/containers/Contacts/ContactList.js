import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchContacts } from '../../actions/Contacts';
import { contacts as GenericContacts  } from '../../components/GenericPages/Contacts';

class ContactList extends Component {

  componentDidMount() {
   this.props.fetchContacts();
  }


  render() {
    const { contacts } = this.props;

    const notFound = !contacts ||  !contacts.data ||  contacts.data.length < 0;
    return (
      <div className="unique">
          <GenericContacts contacts={contacts} />
        { notFound &&
          <h3>no contacts to display...</h3>
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

