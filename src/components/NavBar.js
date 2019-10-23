// Navbar Component at the top of the page. Mainly serves to provide navigation either to the
// Shop view or the cart view. Also displays cart qty and the current subtotal.

import React, { useContext } from "react";
import { Link } from "@reach/router";
import AppContext from "../app-context";

const Navbar = () => {
  const [state] = useContext(AppContext);
  const { qtyTotal, subtotal } = state;
  return (
    <header className="navbar">
      <div className="nav-shop">
        <Link to="/">shop</Link>
      </div>
      Venue Next
      <div className="nav-cart">
        <Link to="cart">
          cart ({qtyTotal}) ${subtotal}
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
