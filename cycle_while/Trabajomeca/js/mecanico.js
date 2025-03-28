/*
	Name exercise: Trabajo mecanico
	Description: calculation of mechanical work
	Autor: José David Amaya Mosquera
	Date: march 23th 2025
*/

let totalTrabajo = 0;
let contadorTrabajo = 0;

while (true) {
  let distancia = 5;
  if (distancia < 0) {
    console.log("Distancia negativa ingresada. Fin del programa.");
    break;
  }
  
  let fuerza = 6;
  let trabajo = fuerza * distancia;
  console.log("El trabajo mecanico es: " + trabajo + " J");
  
  totalTrabajo += trabajo;
  contadorTrabajo++;
}

console.log("Se realizaron " + contadorTrabajo + " calculos con un trabajo total acumulado de " + totalTrabajo + " J.");