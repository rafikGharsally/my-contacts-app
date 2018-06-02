import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import ContactsList from '../Contacts';

import '../../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={ContactsList} />
          <Route render={() => (
            <h2>Page not found Error 404</h2>
            )} />
        </Switch>
      </div>
    );
  }
}

export default App;
