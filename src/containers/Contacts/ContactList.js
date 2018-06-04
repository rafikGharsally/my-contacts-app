import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { get } from 'axios';
import { fetchContacts } from '../../actions/Contacts';



class ContactList extends Component {

  componentDidMount() {
   this.props.fetchContacts();
  }


  render() {
    const { contacts } = this.props;
    const notFound = !contacts.data ||  contacts.data.length < 0;
    return (
      <div>
        <h2>Contact List</h2>
        { contacts.data && contacts.data.length > 0 && contacts.data.map((contact) => {
          return (
            <div key={contact.id}>{contact.name}</div>
          )
        })
        }
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
  console.log('state---' ,state);
  return {
    contacts: state.contacts
  }
};


export default connect(
  mapStateToProps, mapDispatchToProps)(ContactList);

