import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

ReactDOM.render(
  <div className="App">
    <Router>
      <Switch>
        <Login exact path="/login" component={Login} />
        <Register exact path="/register" component={Register} />
      </Switch>
    </Router>
  </div>,
  document.getElementById('root')
);
