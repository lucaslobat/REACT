import React from "react";
import ItemGasto from "./components/gastos/ItemGasto";
import DatosGastos from "./components/datos/DatosGastos";
import GastoCard from "./components/elementos/GastoCard";

// Este es un de objetos de tipo Gasto que se recibe de DatosGastos.js
const datosGastos = DatosGastos();

function App() {
  return (
    <GastoCard className="flex contenedor-items-gasto">
      {datosGastos.map((itemGasto) => (
        <ItemGasto
          fechaGasto={itemGasto.fecha}
          tituloGasto={itemGasto.descripcion}
          valorGasto={itemGasto.valor}
        />
      ))}
    </GastoCard>
  );
}

/* Para que podamos usar esta función de este archivo en otro archivo
debemos exportarla aqui e importarla en el archivo donde queramos
usarla. */
export default App;
