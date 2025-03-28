/*
	Name exercise: weight of planets
	Description: weight with different planets
	Autor:José David Amaya Mosquera
	Date: march 23th 2025
*/
let totalPeso = 0;
let contadorPeso = 0;
 
while (true) {
let masa = parseFloat(prompt("Ingrese la masa del objeto (kg):"));
  if (masa < 0) {
    console.log("Masa negativa ingresada. Fin del programa.");
    break;
  }
  
  let opcion = parseInt(prompt("Seleccione el planeta:\n1. Tierra\n2. Marte\n3. Júpiter"));
  let gravedad;
  
  switch (opcion) {
    case 1:
      gravedad = 9.81;
      break;
    case 2:
      gravedad = 3.71;
      break;
    case 3:
      gravedad = 24.79;
      break;
    default:
      console.log("Opcion no valida. Se usara la gravedad de la Tierra.");
      gravedad = 9.81;
  }
  
  let peso = masa * gravedad;
  console.log("El peso en el planeta seleccionado es: " + peso + " N");
  
  totalPeso += peso;
  contadorPeso++;
}

console.log("Se realizaron " + contadorPeso + " calculos con un peso total acumulado de " + totalPeso + " N.");