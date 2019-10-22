import React, { useContext } from "react";
import AppContext from "../app-context";
import Product from "./Product";

const ID = "gsx$id";
const NAME = "gsx$name";
const PRICE = "gsx$priceincents";
const AVAILABLE = "gsx$available";
const VALUE = "$t";

const booleanFormatter = {
  TRUE: true,
  FALSE: false
};

const Catalog = () => {
  const [state] = useContext(AppContext);
  const { products } = state;
  console.log(state);
  const catalogProducts = products.map(product => {
    return (
      <Product
        id={product[ID][VALUE]}
        name={product[NAME][VALUE]}
        priceInCents={product[PRICE][VALUE]}
        available={booleanFormatter[product[AVAILABLE][VALUE]]}
        key={product[ID][VALUE]}
      />
    );
  });
  return <div className="catalog">{catalogProducts}</div>;
};

export default Catalog;
