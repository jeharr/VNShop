import React, { useContext } from "react";
import AppContext from "../app-context";

const CartItem = ({ id, name, price, qty }) => {
  const [state, setState] = useContext(AppContext);
  const linePrice = (+price * qty).toFixed(2);
  return (
    <div className="cart-item">
      <div className="item-details">
        <div className="product-info">
          {name} - ${price}
        </div>
        <div className="line-amount">Line Amount: ${linePrice}</div>
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
  console.log(newSubtotal);
};
export default CartItem;
