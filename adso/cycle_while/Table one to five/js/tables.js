/*
	Name exercise: Table one to Nine
	Description: Table of Nine
	Autor: José David Amaya Mosquera
	Date: march 21th 2025
*/


let numberOne=1;
let counterTwo=0;
let product=0;
let even=0;
let addOne=0;

while(numberOne<=5){
	counterTwo=0;

while(counterTwo<5){
	counterTwo++;
	product=numberOne*counterTwo;

	if(product%2 == 0){
		console.log(numberOne + "*" + counterTwo + "=" + product + " - Buzz.");
	}
	else{
		console.log(numberOne + "*" + counterTwo + "=" + product + " - Bass.");
		addOne++;
	}
	counterTwo++;

}
numberOne++;
}

console.log("Total even numbers: " + even);
console.log("Total odd numbers: " + addOne);