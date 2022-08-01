import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Profil from "./Pages/Profil";
import Page404 from "./Pages/Page404";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Profil />} />
      <Route path="/dashboard/:id" element={<Profil />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  </BrowserRouter>
);

/// RAJOUTER UNE OPTION SI ID N'EXISTE PAS
