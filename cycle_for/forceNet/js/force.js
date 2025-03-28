/*
	Name exercise: Force Neta
	Description: If the net force (F) on an object is zero
	Author: José David Amaya Mosquera
	Date: March 23th 2025
*/

let numCalculos = parseInt(prompt("Ingrese la cantidad de calculos a realizar:"));

for (let counter = 0; counter < numCalculos; counter++) {
  let masa = 10;
  let aceleracion = 5;
  
  let fuerza = masa * aceleracion;
  console.log("Cálculo " + (counter + 1) + ": La fuerza resultante es " + fuerza + " N");
}