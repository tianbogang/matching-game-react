import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import NewGame from './components/NewGame';
import PlayGame from './components/PlayGame';
import GameOver from './components/GameOver';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/NewGame" component={NewGame} />
          <Route path="/PlayGame/:difficulty" component={PlayGame} />
          <Route path="/GameOver/:duration" component={GameOver} />
          <Route path="/">
            <Redirect to="/NewGame" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
