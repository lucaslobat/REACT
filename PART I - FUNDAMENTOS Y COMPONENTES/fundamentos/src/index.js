// Import del objeto React de la libreria react
import React from "react";

// Import del objeto ReactDOM de la libreria react
import { createRoot } from "react-dom/client";

// Import de los componentes
import App from "./App";

// Import de los estilos generales
import "./index.css";

/* El método createRoot toma como argumento un elemento 
que deseemos que sea el root, y crea un objeto del cual disponemos
de un método render, al cual podemos pasar un componente */
const root = createRoot(document.getElementById("root"));
root.render(<App />);
