import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteContact } from '../../actions/contact';
import {  DeleteFom } from '../../components/GenericPages/Contact';

class DeleteContact extends Component {

  constructor(props) {
    super(props);
    this.submitDelete = this.submitDelete.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  submitDelete(contact) {

    console.log('c',contact);
    const { deleteContact, history, match: { params } } = this.props;
    deleteContact(params.id).then(success => {
      console.log('success contact updated---', success);
      history.push('/');
    }, error => {
      console.log('error updating contact---', error);
    })
  }

  cancel() {
    const { history } = this.props;
    history.push('/');
  }

  render() {

    return (

      <div >
        <DeleteFom
          submitDelete={this.submitDelete}
          cancel={this.cancel}
        />
      </div>

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
  return bindActionCreators({ deleteContact }, dispatch);
};

export default connect(
  mapStateToProps, mapDispatchToProps)(DeleteContact);

