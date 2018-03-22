import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signin from "./views/Signin"

const App = () =>
  <Router> 
    <div>
      <Switch>
        <Route exact path="/signin" component={Signin} />
      </Switch>
    </div>
  </Router>;

export default App;
