import React, { useContext } from "react";
import { Link } from "@reach/router";
import AppContext from "../app-context";

const Navbar = () => {
  const [state] = useContext(AppContext);
  const { qtyTotal } = state;
  return (
    <header className="navbar">
      <div className="nav-shop">
        <Link to="/">shop</Link>
      </div>
      Venue Next
      <div className="nav-cart">
        <Link to="cart">cart ({qtyTotal})</Link>
      </div>
    </header>
  );
};

export default Navbar;
