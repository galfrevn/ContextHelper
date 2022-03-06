import React, { useState } from "react";

const Context = React.createContext()

export function FormContextProvider ({ children }) {
  const [formData, setFormData] = useState({})

  return <Context.Provider value= {{ formData, setFormData }}>
    {children}
  </Context.Provider>
}

export default Context