import React, { useContext } from "react";
import AppContext from "../app-context";

const CartItem = ({ value, colIndex, rowIndex }) => {
  const [state, setState] = useContext(AppContext);
  const { board, moves, currentMove } = state;

  return (
    <div className="CartItem" onClick={setValue}>
      {key[value]}
    </div>
  );
};

export default CartItem;
