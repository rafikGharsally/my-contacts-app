import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';


const FilterContainer = styled.div`
  text-align: right;
  margin:10px;
`;

const Container = styled.div`
  min-width: 900px;
`;

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});
class contacts extends Component {

  constructor(props) {

    super(props);

    const { contacts } = this.props;

    this.state = {
      contacts:{
        data: contacts.data
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.filterItems = this.filterItems.bind(this);
  }

  filterItems(query) {
    const { contacts } = this.props;
    return contacts.data.filter(function(el) {
      return el.name.toLowerCase().indexOf(query.toLowerCase()) > -1;
    });


  }

  handleChange({ target }) {
    let newState = Object.assign({}, this.state);
    newState.contacts.data = this.filterItems(target.value);
    this.setState(newState);
  }

  render () {

  const { classes } = this.props;
  const { contacts } = this.state;
  
  return (
    <Container>
      <FilterContainer>
        <TextField
          id="name"
          label="Filter by name"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange}
          margin="normal"
        />

      </FilterContainer>

      <table style={{width: '100%'}}>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Job Title</th>
            <th>Email</th>
            <th>Phone</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        {contacts && contacts.data && contacts.data.length > 0 && contacts.data.map(n => {
          return (
            <tr key={n.id}>
              <td>{n.id}</td>
              <td>{n.name}</td>
              <td>{n.job_title}</td>
              <td>{n.email}</td>
              <td>{n.phone}</td>
              <td>
                <Button size="small" variant="contained" className={classes.button} href={`/edit/${n.id}`}>
                  edit
                </Button>
                <Button variant="contained" color="secondary" className={classes.button} href={`/delete/${n.id}`}>
                  delete
                </Button>
                <Button size="small" variant="contained" className={classes.button} href={`/view/${n.id}`}>
                  View
                </Button>

              </td>
            </tr>
          )
        })
        }
        </tbody>

      </table>

    </Container>

  )

}

}

export default withStyles(styles)(contacts);