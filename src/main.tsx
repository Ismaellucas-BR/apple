import ReactDOM from "react-dom/client";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import Mac from "./pages/Mac";
import Header from "./components/header";

const root = document.getElementById("root");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/mac" element={<Mac />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
