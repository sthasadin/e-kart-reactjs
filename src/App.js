import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <h1>Checkout</h1>
          </Route>
          <Route path="/login">
            <h1>Login Pages</h1>
          </Route>
          {/* This is the Default Router */}
          <Route path="/">
            <Header />
            <h1>HomePage</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

{
  /* we need react  router for this*/
}
{
  /* Local Host.com*/
}
{
  /* Local Host.com/checkout*/
}
{
  /* Local Host.com/login*/
}

export default App;
