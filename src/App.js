import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          {/* This is the Default Router */}
          <Route path="/">
            <Header />
            <Home />
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
