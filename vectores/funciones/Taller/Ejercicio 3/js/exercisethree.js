/*
Description:  Addition
Autor: José David Amaya Mosquera
Date: 27-march-2025
*/

let sum = 0;
const number = [20, 5, 12, 23, 50, 35, 34, 8];

function sumElement(arrayNumbers){
	for (let iteration = 0; iteration < arrayNumbers.length; iteration++){
		sum = sum + arrayNumbers[iteration];
	}
	return sum;
}

console.log("Array:", number);
console.log("Sum:" + sumElement(number));