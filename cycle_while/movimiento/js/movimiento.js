/*
	Name exercise: Movimento
	Description: Motion simulation
	Autor: José David Amaya Mosquera
	Date: march 23th 2025
*/
let masa = 4;
let velocidad = 0;
let totalDistancia = 0;
let segundos = 0;
  let fuerza = 5;
while (fuerza === 0) {
  if (fuerza === 0) {
    console.log("Fuerza 0 ingresada. Fin del movimiento.");
    break;
  }
  let aceleracion = fuerza / masa;
  velocidad = velocidad + aceleracion * 1;  // t = 1 s
  let distancia = velocidad * 1;
  totalDistancia += distancia;
  segundos++;
  console.log("Despues de " + segundos + " segundo(s): velocidad = " + velocidad + " m/s, distancia recorrida en este segundo = " + distancia + " m");
}
console.log("El objeto estuvo en movimiento durante " + segundos + " segundos y recorrio un total de " + totalDistancia + " metros.")