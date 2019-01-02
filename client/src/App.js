import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Home from "./pages/Home";

library.add(faGithub);
library.add(faLinkedin);

const App = () =>
(
  <Router>
    <div>
      <Switch>
        <Router exact path="/" component={Home} />
      </Switch>
    </div>
  </Router>
)

export default App;
