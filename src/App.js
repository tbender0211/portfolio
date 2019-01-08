import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import "react-bootstrap";

const App = () =>
(
  <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
  </Router>
)

export default App;
