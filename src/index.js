import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";

// views without layouts


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* add routes with layouts */}
      <Route path="/dashboard" component={Admin} />
      <Route path="/login" component={Auth} />
      {/* add routes without layouts */}
      {/* <Route path="/landing" exact component={Landing} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/" exact component={Index} /> */}
      {/* add redirect for first page */}
      <Redirect from="*" to="/login" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
