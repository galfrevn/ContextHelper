import React, { useState } from "react";

const Context = React.createContext()

export function ClientContextProvider ({ children }) {
  const [client, setClient] = useState({})

  return <Context.Provider value= {{ client, setClient }}>
    {children}
  </Context.Provider>
}

export default Context