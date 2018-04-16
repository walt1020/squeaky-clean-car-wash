import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signin from "./views/Signin";
import frontPage from "./views/frontPage";

const App = () =>
  <Router> 
    <div>
      <Switch>
        <Route exact path="/signin" component={Signin} />
      </Switch>
      <Switch>
      <Route exact path="/" component={frontPage} />
      </Switch>
    </div>
  </Router>;

export default App;
