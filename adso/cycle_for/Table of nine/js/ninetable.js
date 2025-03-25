/*
	Name exercise: Table of Nine
	Description: Table of Nine
	Autor: José David Amaya Mosquera
	Date: march 21th 2025
*/


let number=9;
let product;

for (let counter=1;counter<=5;counter++){
    product=number*counter;
    console.log(number +"*"+ counter+ "="+ product);
    if (product%2===0){
        console.log("The result is even.");
	}
	else{
        console.log("The result is odd.");
	}
}