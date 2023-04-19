import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";
import Auth from './components/auth';
import Register from './components/signup';
function App() {
  const history = useHistory();
  if (history.location.pathname === "/") {
    history.push("/login");
  }
  return (
    <div className="App">
        <Router>
        <Switch>
          <Route path="/login" exact component={Auth} />
          <Route path="/register" exact component={Register} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
