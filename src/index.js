import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./pages/App";
import Two from "./pages/Two";
import Show from "./pages/Show";

import { FormContextProvider } from "./context/FormContext";
import { ClientContextProvider } from "./context/ClientContext";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <ClientContextProvider>
      <FormContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="two" element={<Two />} />
            <Route path="show" element={<Show />} />
          </Routes>
        </BrowserRouter>
      </FormContextProvider>
    </ClientContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
