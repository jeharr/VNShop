// creates the default context provider for reacts useContext hook

import React, { createContext } from "react";

const AppContext = createContext([{}, () => {}]);

export default AppContext;
