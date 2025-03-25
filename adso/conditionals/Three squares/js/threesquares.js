/*
	Name exercise: Three squares
	Description: Three squares
	Autor: José David Amaya Mosquera
	Date: march 21th 2025
*/

let sideOne=4;
let sideTwo=5;
let sideThree=6;
let areaOne;
let areaTwo;
let areaThree;

areaOne=sideOne*sideOne;
areaTwo=sideTwo*sideTwo;
areaThree=sideThree*sideThree;

if(areaOne==areaTwo && areaTwo==areaThree){
	console.log("They Are The Same");
}
else if(areaOne==areaTwo){
if(areaOne>areaThree){
	console.log("Area One is equal to Area Two.\ Area One and Area Two are greater than Area Three.");
}
else{
	console.log("Area Three is the greatest.");
}
}
else if(areaOne==areaThree){
if(areaOne>areaTwo){
	console.log("Area One is equal to Area Three.\ Area One and Area Three are greater than Area Two.");
}
else{
console.log("Area Two is the greatest.");
}
}
else if(areaTwo==areaThree){
if(areaTwo>areaOne){
	console.log("Area Two is equal to Area Three.\ Area Two and Area Three are greater than Area One.");
}
else{
	console.log("Area One is the greatest.");
}
}
else if(areaOne>areaTwo && areaOne>areaThree){
	console.log("Area One is the greatest.");
}
else if(areaTwo>areaOne && areaTwo>areaThree){
	console.log("Area Two is the greatest.");
}
else{
	console.log("Area Three is the greatest.");
}