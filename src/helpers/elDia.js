export const elDia = (fecha) => {
  const dias = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo",
  ];
  let diaD = "";
  let hoy = new Date().getDay() - 1;
  let n = new Date(fecha).getDay();

  if (n === hoy) {
    diaD = "Hoy";
  } else {
    diaD = dias[n];
  }

  return diaD;
};
