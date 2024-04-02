import React, { useState } from "react";
import "./Navbar.css";
import ShoppingBag from "../../images/shopping_bag.svg";
import Cart from "../cart/Cart";

const Navbar = () => {
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo"></div>
      <ul className="navbar-menu">
        {menuItems.map((item, index) => (
          <li key={index}>
            <a href="#">{item.title}</a>
          </li>
        ))}
      </ul>
      <div className="navbar-cart-icon">
        <button onClick={toggleCart}>
          <img src={ShoppingBag} alt="shopping bag" />
        </button>
        <div className="cart-count-icon">
          <span className="cart-count-number">0</span>
        </div>
      </div>

      <Cart showCart={showCart}></Cart>
    </nav>
  );
};

const menuItems = [
  { id: 1, title: "Home" },
  { id: 2, title: "Shop" },
  { id: 3, title: "Product" },
  { id: 4, title: "Contact Us" },
];

export default Navbar;
