import React from "react";
import { connect } from "react-redux";

import { addItem, deleteItem, removeItem } from "../../redux/cart/cart.actions";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem, dispatch }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  console.log("cartItem:", cartItem);
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">${price}</span>
      <div className="remove-button">&#10005;</div>
    </div>
  );
};

export default connect()(CheckoutItem);
