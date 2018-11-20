import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

// components
import Landing from "../Landing/Landing";

export default () => {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Landing} />
      </div>
    </Router>
  );
};
