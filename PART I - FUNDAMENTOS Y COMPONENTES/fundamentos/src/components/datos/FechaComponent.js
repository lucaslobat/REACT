/* Este componente se encarga de devolver una fecha en formato string */

import { Temporal } from "@js-temporal/polyfill";

function FechaComponent() {
  const fechaActual = Temporal.Now.plainDateISO().toLocaleString("pt-PT", {
    calendar: "gregory",
  });

  return fechaActual;
}

export default FechaComponent;
