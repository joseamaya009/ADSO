/*
	Name exercise: Vectores
	Description: Vectores
	Autor: José David Amaya Mosquera
*/

let matriz1 = [
	[1, 2],
	[3, 4]
];

let matriz2 = [
	[5, 6],
	[7, 8]
];

let suma = matriz1.map((fila, iteration) =>
	fila.map((valor, iterationTwo) => valor + matriz2[iteration][iterationTwo])
);
console.log(suma);