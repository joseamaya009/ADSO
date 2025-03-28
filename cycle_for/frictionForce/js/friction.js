/*
	Name exercise: Force Friction
	Description: The friction force is calculated with the equation
	Author: José David Amaya Mosquera
	Date: March 23th 2025
*/

let coefFriccion = 6;
let numMasas = 6;

for (let counter = 0; counter < numMasas; counter++) {
  let masa = parseFloat(prompt("Ingrese la masa del objeto (kg):"));
  let normal = masa * 9.81;
  let fuerzaFriccion = coefFriccion * normal;
  console.log("Para la masa " + masa + " kg, la fuerza de fricción es " + fuerzaFriccion + " N.");
}