import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home.js";
import Header from "./components/Header/Header";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Cart from "./components/Cart/Cart";
import "./App.scss";

function App() {
  const [cart, setCart] = useState([]);
  const onAddToCart = (items) => {
    setCart(items);
  };
  return (
    <div className="App">
      <Router>
        <Header cart={cart} />
        <Switch>
          <Route
            path="/"
            render={() => {
              return <Home onAddToCart={onAddToCart} cart={cart} />;
            }}
            exact
          />
          <Route
            path="/product/:id"
            render={() => {
              return <ProductDetail onAddToCart={onAddToCart} cart={cart} />;
            }}
          />
          <Route
            path="/cart"
            render={() => {
              return <Cart cart={cart} onChangeCart={onAddToCart} />;
            }}
            exact
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
