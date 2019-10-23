//Parent Component: Cart.js
//LineItem view. shows line item information and the ability to remove the line from the cart

import React, { useContext } from "react";
import AppContext from "../app-context";

const CartItem = ({ id, name, price, qty }) => {
  const [state, setState] = useContext(AppContext);
  const lineAmount = (+price * qty).toFixed(2);

  return (
    <div className="cart-item">
      <div className="item-details">
        <div className="product-info">
          {name} - ${price} ea
        </div>
        <div className="line-amount">Line Amount: ${lineAmount} </div>
      </div>
      <div>
        <div
          className="remove"
          onClick={() => {
            removeItemFromCart(state, setState, id, price, qty);
          }}
        >
          Remove
        </div>
        <div className="qty">qty: {qty}</div>
      </div>
    </div>
  );
};

// creates new qtyTotal and subtotal adjusting for the price and qty of the item being removed
// deletes item from cart object in appstate
const removeItemFromCart = (state, setState, id, price, qty) => {
  const { cart, qtyTotal, subtotal } = state;
  const newSubtotal = ((+subtotal * 100 - +price * 100 * qty) * 0.01).toFixed(
    2
  );
  const newQtyTotal = qtyTotal - qty;
  delete cart[id];
  setState(() => ({
    ...state,
    cart,
    qtyTotal: newQtyTotal,
    subtotal: newSubtotal
  }));
};
export default CartItem;
