import React, { createContext,useState,useContext } from "react";

const Context = createContext();

function UseContext() {
  const context =useContext(Context);
  return context;
}

export function ContextProvider({ children }) {
  const [username, setUsername] = useState("");
  const [id,setId] = useState("");
  const value = { username,setUsername,id,setId};
  return <Context.Provider value={value}>{children}</Context.Provider>;
}
export default UseContext;
