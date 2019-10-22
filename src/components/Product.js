import React, { useContext } from "react";
import AppContext from "../app-context";

const Product = ({ id, name, priceInCents, available }) => {
  const [state, setState] = useContext(AppContext);
  const { cart, qtyTotal, subtotal } = state;
  const displayPrice = (priceInCents * 0.01).toFixed(2);
  const addToCart = e => {
    cart[id] = cart[id] || {
      id,
      name,
      displayPrice,
      price: displayPrice,
      available,
      qty: 0
    };
    cart[id].qty += 1;
    setState(state => ({
      ...state,
      cart,
      qtyTotal: qtyTotal + 1,
      subtotal: ((subtotal * 100 + +priceInCents) * 0.01).toFixed(2)
    }));
  };

  const availableMessage = available ? (
    <div className="available" onClick={addToCart}>
      Add To Cart
    </div>
  ) : (
    <div className="unavailable">NOT AVAILABLE</div>
  );
  const productQty = (cart[id] && cart[id].qty) || 0;
  return (
    <div className="product">
      <div className="name">{name}</div>
      <div className="price">${displayPrice}</div>
      <div className="add-qty">
        {availableMessage} <div className="product-qty">Qty: {productQty}</div>
      </div>
    </div>
  );
};

export default Product;
