import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

// Seleccionamos el elemento HTML a ser el contenedor
const contenedor = document.getElementById("root");

// Usamos el método createRoot y le pasamos el contenedor
const root = createRoot(contenedor);

/* Los componentes de React consumen el objeto React
para poder usar la sintáxis de JSX, de esta forma
podemos declarar funciones las cuales retornan
elementos HTML atraves de JSX */

// Usamos el método render del objeto para renderizar nuestros componentes
root.render(
  <>
    <Header />
    <Main />
    <Footer />
  </>
);
