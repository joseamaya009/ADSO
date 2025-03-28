/*
Description:  Math operations
Autor: José David Amaya Mosquera
Date: 26-march-2025
*/

let num = Math.floor(Math.random() * 100) + 1;
let result = evenOrOdd(num);

function evenOrOdd(num){
	if (num % 2 === 0){
		return "Even";
	}
	else{
		return "Odd";
	}
}

console.log(`The number ${num} is ${result}`);