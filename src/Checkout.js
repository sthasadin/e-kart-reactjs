import React from "react";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import CurrencyFormat from "react-currency-format";
import "./Checkout.css";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM_/OCC_Amazon1.CB423492668_.jpg"
          alt=""
        />
        {/* <h1>Shopping Cart</h1> */}
        {basket?.length === 0 ? (
          <div>
            <h2>Your Shopping Cart is Empty.</h2>
            <p>
              Your Shopping Cart lives to serve. Give it purpose--fill it with
              books, CDs, videos, DVDs, electronics, and more. Continue shopping
              on the Amazon.in homepage, learn about today's deals, or visit
              your Wish List.
            </p>
          </div>
        ) : (
          <div>
            <h3>Hey, {user?.email}</h3>
            <h2 className="checkout__title">Your Shopping Cart.</h2>

            {/* List out all the products*/}
            {basket?.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
