// top-level App component. This Render wraps all other components withing the Context Provider
// which gives nested components access to the application state and the render also nests
// Catalog and Cart Components within a Router

import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import appState from "../application-state";
import AppContext from "../app-context";
import Catalog from "./Catalog";
import Cart from "./Cart";
import Navbar from "./NavBar";

const API_URL =
  "https://spreadsheets.google.com/feeds/list/1nOp0Ew1mXplxpVuYd65PJieUrKqbPPCHHD1JZ9F-5yQ/1/public/values?alt=json";
const App = () => {
  const [state, setState] = useState(appState);

  // fetches api data when App Component is mounted and sets it to appState
  useEffect(() => {
    fetch(API_URL).then(res => {
      res.json().then(data => {
        setState({ ...state, products: data.feed.entry });
      });
    });
  }, []);

  return (
    <div>
      <AppContext.Provider value={[state, setState]}>
        <Navbar />
        <Router>
          <Catalog path="/" />
          <Cart path="cart" />
        </Router>
      </AppContext.Provider>
    </div>
  );
};

export default App;
