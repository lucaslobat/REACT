import React from "react";
import "./index.css";
import { createRoot } from "react-dom/client";

// Seleccionamos el elemento HTML a ser el contenedor
const contenedor = document.getElementById("root");

// Usamos el método createRoot y le pasamos el contenedor
const root = createRoot(contenedor);

// Usamos el método render del objeto para renderizar nuestros componentes
root.render(
  <ul>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  </ul>
);
