/*
Description:  Name and greeting
Autor: José David Amaya Mosquera
Date: 27-march-2025
*/

let name = "Juan";
let age = Math.floor(Math.random() * 80) + 1;

function greet(name, age){
	if(age < 18){
		return `Hi ${name}, you are ${age} years old.`;
	}
	else{
		return `Hello ${name}, you are ${age} years old.`;
	}
}

console.log(greet(name, age));