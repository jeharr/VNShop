import React, { useContext } from "react";
import AppContext from "../app-context";
import Item from "./CartItem";

const Cart = () => {
  const [state] = useContext(AppContext);
  return (
    <div className="Cart">
      {state.cart.map((row, rowIndex) => {
        return (
          <div>
            {row.map((col, colIndex) => (
              <Item
                value={col}
                colIndex={colIndex}
                rowIndex={rowIndex}
                key={rowIndex + "and" + colIndex}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
