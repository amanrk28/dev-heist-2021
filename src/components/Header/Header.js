import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = ({ cart }) => {
  return (
    <div className="header-wrapper">
      <Link to="/">Home</Link>
      <Link to="/cart">
        <div className="image-container">
          <img
            src="https://icons-for-free.com/iconfiles/png/512/cart-131964784999299812.png"
            alt="Cart"
          />
          <p className="cartSize center">{cart.length || 0}</p>
        </div>
      </Link>
    </div>
  );
};

export default withRouter(Header);
