import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import "./App.css";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51HQbCqIgjWa2dsj87QbPS2JVjvcGDILNASi15ILzKBvAkc8ORJtMQZ9cX9HgmgovYGRYo3gC8oNKGxi1DvLJuwJD00aIeGpYj9"
);
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    //will only run once when the app component
    auth.onAuthStateChanged((authUser) => {
      console.log("the use is >>>>", authUser);

      if (authUser) {
        //the user just logged in / the user logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
        //the user is logged out
      }
    });
  }, []);
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
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
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
