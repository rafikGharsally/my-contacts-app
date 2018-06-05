import React from 'react';
import Modal from 'react-modal';


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
class DeleteForm extends React.Component {

  constructor() {
    super();

    this.state = {
      modalIsOpen: true
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    const { cancel } = this.props;
    this.setState({modalIsOpen: false});
    cancel();
  }


  render() {

    const { submitDelete } = this.props;
    return (
      <div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          appElement={document.getElementById('root')}
        >

          <h2 ref={subtitle => this.subtitle = subtitle}>Are you sure ?</h2>

          <div>
            <button onClick={this.closeModal}>cancel</button>
            <button onClick={submitDelete}>delete</button>
          </div>

        </Modal>
      </div>
    );
  }

}



// Modal.setAppElement('#root');


export default DeleteForm;