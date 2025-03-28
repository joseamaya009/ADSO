/*
	Name exercise: Free Fall
	Description: Free Fall
	Autor: José David Amaya Mosquera
	Date: march 21th 2025
*/

let weightOne= 500;
let weightTwo = 700;
let gravity = 9.81;
let massOne;
let massTwo;

massOne = weightOne/gravity;
massTwo = weightTwo/gravity;
    
if(massOne > massTwo){
	console.log("Mass One is Greater.");
}
else if(massOne < massTwo){
	console.log("Mass two is greater.");
}
else{
	console.log("They are equal.");
}