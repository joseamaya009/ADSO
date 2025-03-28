/*
	Name exercise: Weight of an Object
	Description: The weight of an object depends on the gravity on each planet.
	Author: José David Amaya Mosquera
	Date: March 23th 2025
*/

let masas = 10;
let gravedades = { "Tierra": 9.8, "Marte": 3.7, "Júpiter": 24.8, "Luna": 1.6 };
let planetas = Object.keys(gravedades);

for (let i = 0; i < planetas.length; i++) {
  let peso = masas[0] * gravedades[planetas[i]];
  console.log("El peso en " + planetas[i] + " es " + peso + " N");
}