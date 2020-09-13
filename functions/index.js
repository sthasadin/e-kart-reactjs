const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response, request } = require("express");
const stripe = require("stripe")(
  "sk_test_51HQbCqIgjWa2dsj8fRMojlxyCGfzxkCY1cw1j56Wxke5iCj3mTiWdaAVOXZBuheaV2TahbWKGPvWwVKuj2F6z4Ht00l4WNlCgL"
);

//API

//-App config
const app = express();

//-Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//-API routs
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!!", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits
    currency: "npr",
  });

  //ok-  created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
//-Listen command

exports.api = functions.https.onRequest(app);

//Example end point
//http://localhost:5001/e-kart-66c13/us-central1/api
