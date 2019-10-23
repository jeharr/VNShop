// The Catalog Component is the store front where a person can see all products available
// and unavailable. It houses all of the individual Product Components that show product info
// and give the ability to add to the store cart

import React, { useContext } from "react";
import AppContext from "../app-context";
import Product from "./Product";

// These prop names are set to variables for readablitiy and also to prevent typo related errors
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
