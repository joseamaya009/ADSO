/*
	Name exercise: Newton's Third Law
	Description: Calculate the applied force
	Autor:José David Amaya Mosquera
	Date: march 23th 2025
*/

let totalFuerzaAplicada = 0;
let contadorFuerza = 0;

while (true) {
  let fuerza = 10;
  
  if (fuerza === 0) {
    console.log("Fuerza 0 ingresada. Fin del programa.");
    break;
  }
  
  let reaccion = -fuerza;
  console.log("La fuerza de reaccion es: " + reaccion + " N");
  
  totalFuerzaAplicada += fuerza;
  contadorFuerza++;
}

console.log("Se ingresaron " + contadorFuerza + " fuerzas con un total acumulado de " + totalFuerzaAplicada + " N.");