import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core//Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import { withStyles } from '@material-ui/core/styles';


const StyledAddContainer = styled.div`
  margin: 8px;
  padding: 16px;
`;

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  icon: {
    margin: theme.spacing.unit * 2,
    color: 'white',
  },
  iconHover: {
    margin: theme.spacing.unit * 2,
    '&:hover': {
      color: 'red',
    },
  },
});


function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}
const AddContact = ({ title, history, previousState, children, classes }) => (
  <div>
    <AppBar position="static">
      <Toolbar>
        <IconButton onClick={() => history.push(previousState) }>
          {
            <HomeIcon className={classes.icon} />
          }
        </IconButton>
        <Typography style={{ flex: '1' }} type="title" color="inherit">
          { title }
        </Typography>
      </Toolbar>
    </AppBar>
    <StyledAddContainer>
      { children }
    </StyledAddContainer>
  </div>
);

export default withRouter( withStyles(styles)(AddContact));