import React, { useState, useEffect } from "react";
import appState from "../application-state";
import AppContext from "../app-context";
import Catalog from "./Catalog";
// import Cart from "./Cart";
const API_URL =
  "https://spreadsheets.google.com/feeds/list/1nOp0Ew1mXplxpVuYd65PJieUrKqbPPCHHD1JZ9F-5yQ/1/public/values?alt=json";
const App = () => {
  const [state, setState] = useState(appState);

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
        <Catalog />
      </AppContext.Provider>
    </div>
  );
};

export default App;
