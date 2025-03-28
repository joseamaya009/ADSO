/*
	Name exercise: Position simulation
	Description: Position simulation
	Autor: José David Amaya Mosquera
*/

let iterationOne;
let iterationTwo;
let positions = [];

const acceleration = [2, -1];
const initialVelocity = [4, 0];
const initialPosition = [0, 0];
const steps = 5;

for (iterationOne = 1; iterationOne <= steps; iterationOne++){
	let position = [];
	for (iterationTwo = 0; iterationTwo < initialPosition.length; iterationTwo++){
		let positionTwo = initialPosition[iterationTwo] +
			(initialVelocity[iterationTwo] * iterationOne) +
			(0.5 * acceleration[iterationTwo] * iterationOne ** 2);
        
		position.push(positionTwo);
	}
	positions.push(position);
}

console.log("Positions at each second:");
console.log(positions);