import React from "react";
import "./index.css";
import { createRoot } from "react-dom/client";

// Seleccionamos el elemento HTML a ser el contenedor
const contenedor = document.getElementById("root");

// Usamos el método createRoot y le pasamos el contenedor
/* const root = createRoot(contenedor); */

/* Los componentes de React consumen el objeto React
para poder usar la sintáxis de JSX, de esta forma
podemos declarar funciones las cuales retornan
elementos HTML atraves de JSX */

function Titulo() {
  return <h1 className="titulo">Fundamentos de React.js</h1>;
}

/* Desafio: recrea la función de arriba usando Vanilla JS:
- Crea un nuevo elemento h1
- Asignale el valor a su textContent
- Asignale la clase de "titulo"
- Hazle append al elemento de id "root"*/
const root = document.querySelector("#root");
const h1 = document.createElement("h1");
h1.textContent = "Fundamentos de React.js!";
h1.classList.add("titulo");
root.append(h1);

// Usamos el método render del objeto para renderizar nuestros componentes
/* root.render(
  <>
    <Titulo />
    <Parrafo />
  </>
); */
