/*
	Name exercise: Legal age
	Description: Legal age
	Autor: José David Amaya Mosquera
	Date: march 21th 2025
*/

let ageOne=20;
let ageTwo=17;
let ageThree=18;
let addition;
let average;

addition=ageOne+ageTwo+ageThree;
average=addition/3;

if(ageOne>=18){
	console.log("Age one is an adult.");
}
else{
	console.log("Age one is a child.");
}
if(ageTwo>=18){
	console.log("Age two is an adult.");
}
else{
	console.log("Age two is a child.");
}
if(ageThree>=18){
	console.log("Age three is an adult.");
}
else{
	console.log("Age three is a child.");
}
if(average>=18){
	console.log("The group is composed of adults.");
}
else{
	console.log("The group is composed of children.");
}