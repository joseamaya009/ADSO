/*
	Name exercise: Object friction
	Description: Object friction
	Autor: José David Amaya Mosquera
	Date: march 21th 2025
*/

let mass = 10;
let frictionCoefficient = 0.5;
let gravity = 9.81;
let normalForce;
let frictionForce;

normalForce = mass*gravity;
frictionForce = frictionCoefficient*normalForce;
    
if(frictionForce > 50){
	console.log("Friction is high.");
}
else{
	console.log("Friction is low.");
}