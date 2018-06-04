import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import ContactsList from '../Contacts';
import NewContact from '../NewContact';
import EditContact from '../EditContact';
import DeleteContact from '../DeleteContact';
import ViewContact from '../ViewContact';
import Grid from '@material-ui/core/Grid';
import Sidebar from '../Sidebar';
import '../../App.css';

const fullHeight = {
  height: '100%',
  position: 'relative'
};

class App extends Component {
  render() {
    return (
      <div>
        <Sidebar/>
        <Grid  container className="App" justify="center" style={fullHeight}>
          <Grid style={fullHeight}>
            <Switch>
              <Route exact path="/" component={ContactsList} />
              <Route exact path="/new" component={NewContact} />
              <Route exact path="/edit/:id" component={EditContact}/>
              <Route exact path="/view/:id" component={ViewContact}/>
              <Route exact path="/delete/:id" component={DeleteContact} />
              <Route render={() => (
                <h2>Page Not Found Error 404</h2>
              )} />
            </Switch>
          </Grid>
        </Grid>
      </div>

    );
  }
}

export default App;
