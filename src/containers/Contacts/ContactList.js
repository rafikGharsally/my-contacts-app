import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { get } from 'axios';
import { fetchContacts } from '../../actions/Contacts';



class ContactList extends Component {

  componentDidMount() {
    fetchContacts();
  }


  render() {

    return (
      <div>contacts list</div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchContacts }, dispatch);
};

const mapStateToProps = state => {
  console.log('state---' ,state);
  return {
    contacts: {}
  }
};


export default connect(
  mapStateToProps, mapDispatchToProps)(ContactList);

