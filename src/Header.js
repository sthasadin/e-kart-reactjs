import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
  return (
    <nav className="header">
      {/* Logo on the left */}
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        ></img>
      </Link>
      {/* SearchBox */}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* 3 Links */}
      <div className="header__nav">
        {/* 1rst link */}
        <Link to="/login" className="header__link">
          <div className="header_option">
            <span>Hello Sadin</span>
            <span>SignIn</span>
          </div>
        </Link>

        {/* 2nd link */}
        <Link to="/" className="header__link">
          <div className="header_option">
            <span>Returns</span>
            <span>& Orders</span>
          </div>
        </Link>

        {/* 3rd link */}
        <Link to="/" className="header__link">
          <div className="header_option">
            <span>Your</span>
            <span>Prime</span>
          </div>
        </Link>

        {/* 4th link */}
      </div>
      {/* Basket icon with number */}
    </nav>
  );
}

export default Header;
