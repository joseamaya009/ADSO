/*
	Name exercise: Vectores
	Description: Vectores
	Autor: José David Amaya Mosquera
	Date: march 26th 2025
*/

let iterationOne;
let iterationTwo;
let acceleration;
let accelerations=[];
let values;

const forces = [
	[10, 5, 0],
	[4, -3, 2],
	[0, 0, 6]
];

const mass = [2, 4, 3];

for(iterationOne=0;iterationOne<forces.length; iterationOne++){
	let values=[];
	for(iterationTwo=0;iterationTwo<forces[iterationOne].length;iterationTwo++){
		console.log(forces[iterationOne][iterationTwo]);
		acceleration=forces[iterationOne][iterationTwo]/mass[iterationTwo];
		values.push(acceleration);
	}
		accelerations.push(values);
}

console.log(accelerations);