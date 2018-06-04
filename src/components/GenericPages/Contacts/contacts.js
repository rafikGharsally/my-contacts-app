import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';



const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});
class contacts extends Component {

  render () {

  const { contacts, classes } = this.props;

  return (
    <div>
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
        {contacts.data && contacts.data.length > 0 && contacts.data.map(n => {
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

    </div>

  )

}

}

export default withStyles(styles)(contacts);