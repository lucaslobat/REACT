import React from "react";
import "./index.css";
import { createRoot } from "react-dom/client";

// Seleccionamos el elemento HTML a ser el contenedor
const contenedor = document.getElementById("root");

// Usamos el método createRoot y le pasamos el contenedor
const root = createRoot(contenedor);

/* Los componentes de React consumen el objeto React
para poder usar la sintáxis de JSX, de esta forma
podemos declarar funciones las cuales retornan
elementos HTML atraves de JSX */

function Titulo() {
  return <h1>Fundamentos de React.js</h1>;
}

function Parrafo() {
  return (
    <p>
      The component is basically JavaScript class or function that can have
      arguments called properties or props. Each component must return only one
      React element that can be rendered in the browser. Now that you understood
      what components are, let me show you how to create these components.
    </p>
  );
}

// Usamos el método render del objeto para renderizar nuestros componentes
root.render(
  <>
    <Titulo />
    <Parrafo />
  </>
);
