import React, { Component } from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
const StyledButtonContainer = styled.div`
  margin-top: 32px;
`;
const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class ContactForm extends Component {
  constructor(props) {
    super(props);

    const { contact } = props;

    this.state = {
      contact: {
        name: (contact && contact.name) || '',
        address: (contact && contact.address) || '',
        job_title: (contact && contact.job_title) || '',
        phone: (contact && contact.phone) || '',
        email: (contact && contact.email) || '',
      }
    };

    this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }


  handleTextFieldChange(event) {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      contact: {
        ...this.state.contact,
        [name]: value
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { submitForm } = this.props;
    const user = {
      ...this.props.contact,
      ...this.state.contact
    };
    submitForm(user);
  }



  render () {

    const { classes } = this.props;
    const { contact } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          id="name"
          label="Name"
          name="name"
          fullWidth
          value={contact.name}
          required
          margin="normal"
          onChange={this.handleTextFieldChange}
        />

        <TextField
          id="job_title"
          label="job_title"
          name="job_title"
          fullWidth
          value={contact.job_title}
          required
          margin="normal"
          onChange={this.handleTextFieldChange}
        />
        <TextField
          id="address"
          label="address"
          name="address"
          fullWidth
          value={contact.address}
          required
          margin="normal"
          onChange={this.handleTextFieldChange}
        />
        <TextField
          id="phone"
          label="phone"
          name="phone"
          fullWidth
          value={contact.phone}
          required
          margin="normal"
          onChange={this.handleTextFieldChange}
        />
        <StyledButtonContainer>
          <Button type="submit" variant="contained" color="primary" className={classes.button}>
            Save
          </Button>
        </StyledButtonContainer>
      </form>

    )

  }

}


export default withStyles(styles)( ContactForm);
