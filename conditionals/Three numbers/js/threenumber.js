/*
	Name exercise: Three numbers
	Description: Three Numbers
	Autor: José David Amaya Mosquera
	Date: march 21th 2025
*/

let numberOne = 12;
let numberTwo = 11;
let numberThree = 9;
    
if(numberOne==numberTwo && numberTwo==numberThree){
	console.log("They Are The Same");
}
else if(numberOne==numberTwo){
if (numberOne > numberThree){
	console.log("Number One is equal to Number Two.\ Number One and Number Two are greater than Number Three.");
}
else{
	console.log("Number Three is the greatest.");
}
}
else if (numberOne==numberThree){
if (numberOne>numberTwo){
	console.log("Number One is equal to Number Three.\ Number One and Number Three are greater than Number Two.");
}
else{
	console.log("Number Two is the greatest.");
}
}
else if(numberTwo==numberThree){
if(numberTwo>numberOne){
	console.log("Number Two is equal to Number Three.\ Number Two and Number Three are greater than Number One.");
} else {
	console.log("Number One is the greatest.");
}
}
else if(numberOne>numberTwo && numberOne>numberThree){
	console.log("Number One is the greatest.");
}
else if(numberTwo>numberOne && numberTwo>numberThree){
	console.log("Number Two is the greatest.");
}
else{
	console.log("Number Three is the greatest.");
}