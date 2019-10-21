import React, { useContext } from "react";
import AppContext from "../app-context";

const Product = ({ id, name, price, available }) => {
  // const [state, setState] = useContext(AppContext);
  return (
    <div className="Product">
      <div className="id">id {id}</div>
      <div className="name">name {name}</div>
      <div className="price">price {price}</div>
      <div className="available">available {available + ""}</div>
    </div>
  );
};

export default Product;
