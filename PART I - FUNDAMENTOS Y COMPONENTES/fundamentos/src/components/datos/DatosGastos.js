import FechaComponent from "./FechaComponent";

const fechaString = FechaComponent();

function DatosGastos() {
  const arrayGastos = [
    {
      id: "g1",
      descripcion: "Mensualidad Gym",
      valor: 30,
      fecha: fechaString,
    },
    {
      id: "g2",
      descripcion: "Gafas",
      valor: 150,
      fecha: fechaString,
    },
    {
      id: "g3",
      descripcion: "Kinder Paperwhite",
      valor: 130,
      fecha: fechaString,
    },
  ];

  return arrayGastos;
}

export default DatosGastos;
