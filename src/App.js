
import React from 'react';
import './css/style.css';

//import { Router } from 'express'; //default

// import Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import Pages
import Home from "./Pages/Home";

function App() {
  return (
    <React.StrictMode>
      <Router>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
      </Router>
    </React.StrictMode>
  );
}
/* 
            <Route exact path="/react-hooks" component={ReactHooks} />
            <Route exact path="/form-example" component={FormExample} />


*/
export default App;