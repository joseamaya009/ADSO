/*
	Name exercise: Table of Five
	Description: Table of Five
	Autor: José David Amaya Mosquera
	Date: march 21th 2025
*/


let numberOne=5;
let counter=0;
let product;

while(counter<5){
	counter++;
	product=numberOne*counter;

	console.log(counter);
	if(product%2 == 0){
		console.log(numberOne + "*" + counter + "=" + product);
	}
	else{
		console.log(numberOne + "*" + counter + "=" + product);
	}	

}