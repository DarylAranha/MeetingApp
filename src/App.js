import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import login from './Components/Login/login';
import dashboard from './Components/Dashboard/dashboard';
function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={login} />
        <Route path="/dashboard" component={dashboard} />
      </div>
    </Router>
  );
}

export default App;
