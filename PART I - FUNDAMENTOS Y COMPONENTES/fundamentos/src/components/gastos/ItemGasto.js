import React from "react";
import "./ItemGasto.css";
import GastoCard from "../elementos/GastoCard";

function ItemGasto(props) {
  return (
    <GastoCard className="flex gasto-card">
      {props.fechaGasto}
      <p>{props.tituloGasto}</p>
      <div>{props.valorGasto}€</div>
    </GastoCard>
  );
}

export default ItemGasto;
