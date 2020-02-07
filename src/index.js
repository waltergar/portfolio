/*

=========================================================
* Now UI Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-react
* Copyright 2019 Creative Tim (http://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-react/blob/master/LICENSE.md)

* Designed by www.invisionapp.com Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/nucleo-icons-page-styles.css";
// pages for this kit
import CookiePolicyPage from "views/examples/CookiePolicyPage.js";
import ContactPage from "views/examples/ContactPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import PrivacyPolicyPage from "views/examples/PrivacyPolicyPage.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Switch>
        <Route path="/index" render={props => <ProfilePage {...props} />} />
        <Route
          path="/cookie-policy"
          render={props => <CookiePolicyPage {...props} />}
        />
        <Route
          path="/contact"
          render={props => <ContactPage {...props} />}
        />
        <Route
          path="/privacy-policy"
          render={props => <PrivacyPolicyPage {...props} />}
        />
        <Redirect to="/index" />
        <Redirect from="/" to="/index" />
      </Switch>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
