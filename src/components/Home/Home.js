import React from "react";
import { withRouter } from "react-router";
import { PRODUCTS } from "../constants";
import "./Home.scss";

const Home = ({ history, onAddToCart, cart }) => {
  const onClickProduct = (id) => {
    history.push(`/product/${id}`);
  };
  const onClickAddToCart = (id) => {
    onAddToCart([...cart, id]);
    alert("Product added to cart");
  };
  const removeFromCart = (id) => {
    const items = cart.filter((x) => x !== id);
    onAddToCart(items);
    alert("Product removed to cart");
  };
  return (
    <div className="home-wrapper">
      <div className="products-wrapper">
        {PRODUCTS.map((product) => (
          <div key={product.id} className="products-container">
            <div
              className="image-container center"
              onClick={() => onClickProduct(product.id)}
            >
              <img src={product.image} alt={product.name} />
            </div>
            <p className="name">{product.name}</p>
            <p className="price">&#8377;{product.price}</p>
            {cart.includes(product.id) ? (
              <p
                className="inCart-text"
                onClick={() => removeFromCart(product.id)}
              >
                In cart
              </p>
            ) : (
              <button
                type="button"
                onClick={() => onClickAddToCart(product.id)}
              >
                Add To Cart
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default withRouter(Home);
