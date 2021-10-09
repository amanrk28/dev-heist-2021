import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import { PRODUCTS } from "../constants";
import "./ProductDetail.scss";

const ProductDetail = ({ match, cart, onAddToCart }) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const { id } = match.params;
    const newProduct = PRODUCTS.find(
      (x) => parseInt(x.id, 10) === parseInt(id, 10)
    );
    if (newProduct) {
      setProduct(newProduct);
    } else {
      alert("Product Not Found");
    }
  }, [match.params]);

  const onClickAddToCart = (id) => {
    alert("Product Added to Cart");
    onAddToCart([...cart, id]);
  };

  const removeFromCart = () => {
    alert("Product Removed from Cart");
    const items = cart.filter((x) => x !== product.id);
    onAddToCart(items);
  };

  return (
    <>
      {Object.keys(product).length > 0 && (
        <div className="productDetail-wrapper">
          <div className="image-container">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="productInfo">
            <div className="name">{product.name}</div>
            <div className="price">&#8377; {product.price}</div>
            <p>About Product:</p>
            <ul className="description">
              {product.description.map((desc) => (
                <li key={desc}>{desc}</li>
              ))}
            </ul>
            {cart.includes(product.id) ? (
              <p className="inCart-text" onClick={removeFromCart}>
                In Cart (click here to remove)
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
        </div>
      )}
    </>
  );
};

export default withRouter(ProductDetail);
