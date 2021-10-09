import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../constants";
import "./Cart.scss";

const CART_HEADERS = [
  { name: "Image", dataname: "image" },
  { name: "Name", dataname: "name" },
  { name: "Price", dataname: "price" },
  { name: "", dataname: "delete" },
];

const Cart = ({ cart, history, onChangeCart }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const items = PRODUCTS.filter((x) => cart.includes(x.id));
    setCartItems(items);
  }, [cart]);

  const openProductDetail = (id) => {
    history.push(`/product/${id}`);
  };

  const removeFromCart = (id) => {
    const items = cart.filter((x) => x !== id);
    onChangeCart(items);
    alert("Product removed from Cart");
  };

  return (
    <div className="cart-wrapper">
      {cartItems.length > 0 ? (
        <>
          <div className="header">Shopping Cart</div>
          <ul className="table-wrapper">
            <li>
              {CART_HEADERS.map((item) => (
                <div
                  key={item.dataname}
                  className={`tableHeader ${item.dataname}`}
                >
                  {item.name}
                </div>
              ))}
            </li>
            {cartItems.map((cartItem) => (
              <li>
                {CART_HEADERS.map((item) => (
                  <div
                    key={item.dataname}
                    className={item.dataname}
                    onClick={() => openProductDetail(cartItem.id)}
                  >
                    {item.dataname === "image" ? (
                      <img src={cartItem.image} alt={cartItem.name} />
                    ) : (
                      <div>{cartItem[item.dataname]}</div>
                    )}
                    {item.dataname === "delete" && (
                      <img
                        src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-coloricon-1/21/52-512.png"
                        alt="Delete"
                        className="deleteIcon"
                        onClick={() => removeFromCart(cartItem.id)}
                      />
                    )}
                  </div>
                ))}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p className="center">
          Cart is Empty. Start Shopping&nbsp;<Link to="/">Here</Link>
        </p>
      )}
    </div>
  );
};

export default withRouter(Cart);
