/*
	Name exercise: Table one to Nine
	Description: Table of Nine
	Autor: José David Amaya Mosquera
	Date: march 21th 2025
*/

let number = 9;
let product;
let result;
let counterOne = 0;
let counterTwo = 0;
let numberOne = 10;

for(product=1;product<=5;product++){
	result=number*product;
	console.log(number +"*"+ product +"="+ result);
	if (result % 2===0){
	console.log("Buzz");
}
else{
	console.log("Bass");
	}
}
for(product=1;product<=5;product++){
	result=number*product;
	console.log(number +"*"+ product +"="+ result);
	if(result%2===0){
	console.log("Buzz");
}
else{
	console.log("Bass");
	}
}
	if(counterOne<numberOne){
	console.log(counterOne +"*"+ counterTwo +"="+ product);
	result=number*product;
}
else{
	console.log(counterOne +"*"+ counterTwo +"="+ product);
	result=number*product;
}

if(counterOne<numberOne){
	product=number*1;
	console.log(counterOne +"*"+ counterTwo +"="+ product);
	result=number*product;
}
else{
	product=number*1;
	console.log(counterOne +"*"+ counterTwo +"="+ product);
	result=number*product;
}