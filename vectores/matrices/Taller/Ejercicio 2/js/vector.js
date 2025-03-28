/*
	Name exercise: Vector forces
	Description: Vector forces
	Autor: José David Amaya Mosquera
*/

let iterationOne;
let iterationTwo;
let totalForce = [0, 0];
let totalAcceleration;

const forces = [
	[5, 0],
	[-2, 3],
	[1, -1]
];

const mass = 2;

for(iterationOne = 0; iterationOne < forces.length; iterationOne++){
	for(iterationTwo = 0; iterationTwo < forces[iterationOne].length; iterationTwo++){
		totalForce[iterationTwo] = totalForce[iterationTwo] + forces[iterationOne][iterationTwo];
	}
}

totalAcceleration = totalForce.map(force => force / mass);

console.log("Total force:", totalForce);
console.log("Total acceleration:", totalAcceleration);