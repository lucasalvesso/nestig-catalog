import React, { useState } from "react";
import "./Cart.css";

interface CartProps {
  showCart: boolean;
}

const Cart: React.FC<CartProps> = ({ showCart }) => {
  const products: Array<Record<string, any>> = [];

  const [itemCount, setItemCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // // Function to calculate total item count and total price
  // const calculateTotal = () => {
  //   let totalItems = 0;
  //   let totalPrice = 0;
  //
  //   products.forEach((product) => {
  //     totalItems += product.quantity;
  //     totalPrice += product.price * product.quantity;
  //   });
  //
  //   setItemCount(totalItems);
  //   setTotalPrice(totalPrice);
  // };
  //
  // // Calculate total whenever the product list changes
  // useState(() => {
  //   calculateTotal();
  // }, [products]);

  return (
    <div className={`shopping-cart ${showCart ? "show" : ""}`}>
      <div className="cart-header">
        <h2>Your bag</h2>
        {/*<button onClick={closeCart}>Close</button>*/}
      </div>
      <div className="cart-products">
        {products.map((product, index) => (
          <div className="cart-product" key={index}>
            <div className="cart-product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="cart-product-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Quantity: {product.quantity}</p>
            </div>
            <div className="cart-product-price">
              {product.price.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <p>Total Items: {itemCount}</p>
        <p>
          Total Price:{" "}
          {totalPrice.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </p>
      </div>
      <button className="checkout-button">Checkout</button>
    </div>
  );
};

export default Cart;
