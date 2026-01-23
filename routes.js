import { Routes, Route } from "react-router-dom";
import Header from "../components/Header/Header";

import App from "./src/App";
import Mac from "./src/pages/Mac";

export default function AppRoutes() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/mac" element={<Mac />} />
      </Routes>
    </>
  );
}
