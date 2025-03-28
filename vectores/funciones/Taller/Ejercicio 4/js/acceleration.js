/*
Description:  Addition
Autor: José David Amaya Mosquera
Date: 27-march-2025
*/

let force = 25;
let mass = 5;
let acceleration;

function calculateAcceleration(force, mass){
	acceleration = force / mass;
	return acceleration;
}

console.log(`Force: ${force}`);
console.log(`Mass: ${mass}`);
console.log(`The acceleration is: ${calculateAcceleration(force, mass)}`);