import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 80px;
  background-color: #007bff!important;
  overflow: hidden;
  margin-bottom: 2em;
`;

const LinksCont = styled.div`
 margin:10px;
`;

const AppTitle = styled.h2`
 color:white;
 margin:1em;
`;

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});


class Sidebar extends Component {


  render() {
    const { classes } = this.props;
    return (
      <SidebarContainer>
        <AppTitle>My Contacts App - </AppTitle>
        <LinksCont>
          <Button variant="contained" color="primary" className={classes.button} href="/" >
            index
          </Button>
          <Button variant="contained" color="primary" className={classes.button} href="/new" >
            New contact
          </Button>
        </LinksCont>
      </SidebarContainer>

    );
  }
}

export default withStyles(styles)(Sidebar);
