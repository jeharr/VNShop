import React, { useContext } from "react";
import AppContext from "../app-context";
import Product from "./Product";

const ID = "gsx$id";
const NAME = "gsx$name";
const PRICE = "gsx$priceincents";
const AVAILABLE = "gsx$available";
const VALUE = "$t";

const booleans = {
  TRUE: true,
  FALSE: false
};

const Catalog = () => {
  const [state, setState] = useContext(AppContext);
  const { products } = state;
  console.log(state);
  const catalogProducts = products.map(product => {
    return (
      <Product
        id={product[ID][VALUE]}
        name={product[NAME][VALUE]}
        price={(product[PRICE][VALUE] * 0.01).toFixed(2)}
        available={booleans[product[AVAILABLE][VALUE]]}
        key={product[ID][VALUE]}
      />
    );
  });
  return <div className="Catalog">{catalogProducts}</div>;
};

export default Catalog;
