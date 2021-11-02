import React, { createContext,useState,useContext } from "react";

const Context = createContext();

function UseContext() {
  const context =useContext(Context);
  return context;
}

export function ContextProvider({ children }) {
  const [createClassDialog, setCreateClassDialog] = useState(false);
  const value = { createClassDialog, setCreateClassDialog };
  return <Context.Provider value={value}>{children}</Context.Provider>;
}
export default UseContext;
