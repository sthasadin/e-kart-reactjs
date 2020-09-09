import React from "react";
import "./Home.css";
import Product from "./Product";
import CurrencyFormat from "react-currency-format";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/CEPC/Wearables/Mi/Redmi_Band/SaleOn/MI-Xiaomi_GW_MobileHero_1500x600._CB405135019_.jpg"
      ></img>

      {/* Products id, tittle, price, rating, image*/}
      <div className="home__row">
        <Product
          id="12345"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
          price={800}
          rating={5}
          image="https://m.media-amazon.com/images/I/81jgCiNJPUL._AC_UY327_FMwebp_QL65_.jpg"
        />
        <Product
          id="1234786875"
          title="Sapiens: A Brief History of Humankind"
          price={800}
          rating={5}
          image="https://m.media-amazon.com/images/I/713jIoMO3UL._AC_UY327_FMwebp_QL65_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="123476757655"
          title="Samsung Galaxy Watch (Bluetooth, 42 mm) - Black"
          price={800}
          rating={5}
          image="https://m.media-amazon.com/images/I/61ErvNimpvL._AC_UL480_FMwebp_QL65_.jpg"
        />
        <Product
          id="1236576545345"
          title="Amazon Echo (3rd Gen) – Improved sound, powered by Dolby (Black)"
          price={800}
          rating={5}
          image="https://m.media-amazon.com/images/I/7128HRanJgL._AC_UY327_FMwebp_QL65_.jpg"
        />
        <Product
          id="1239879846562345"
          title="Kindle (10th Gen), 6' Display with Built-in Light,WiFi (Black)"
          price={800}
          rating={5}
          image="https://m.media-amazon.com/images/I/61Iv2mzVdZL._AC_UY327_FMwebp_QL65_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="1231478239945"
          title="LG 29 inch Ultrawide Full HD IPS Gaming, Multitasking Monitor with 1ms Response Rate, 75Hz Refresh Rate - USB C, Display Port, HDMI, VGA - 10 W Inbuilt Speaker - 29UM69"
          price={800}
          rating={5}
          image="https://m.media-amazon.com/images/I/81t1tAzEgGL._AC_UY327_FMwebp_QL65_.jpg"
        />
      </div>

      {/* Product*/}
    </div>
  );
}

export default Home;
