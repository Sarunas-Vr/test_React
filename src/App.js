
import React from 'react';

//import { Router } from 'express'; //default

// import Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import Pages

function App() {
  return (
    <React.StrictMode>
      <Router>
          <Switch>
            <Route exact path="/" component={} />
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