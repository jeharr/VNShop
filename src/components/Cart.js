import React, { useContext } from "react";
import AppContext from "../app-context";
import CartItem from "./CartItem";

const Cart = () => {
  const [state, setState] = useContext(AppContext);
  const { cart, qtyTotal, subtotal } = state;

  const CartItems = Object.values(cart).map(({ id, name, price, qty }) => {
    return <CartItem key={id} id={id} name={name} price={price} qty={qty} />;
  });

  return (
    <div className="cart">
      <div className="cart-header">
        <div className="cart-amount">Cart - {qtyTotal} Item(s)</div>
        <div className="cart-total">Total: ${subtotal}</div>
      </div>
      {CartItems}
      <div className="cart-remove-all">
        <div
          className="remove-all-button"
          onClick={() => {
            removeAllCartItems(state, setState);
          }}
        >
          Empty Cart
        </div>
      </div>
    </div>
  );
};

const removeAllCartItems = (state, setState) => {
  setState(() => ({ ...state, cart: {}, qtyTotal: 0, subtotal: "0.00" }));
};

export default Cart;
