/*
	Name exercise: Final grades
	Description: Final Grades
	Autor: José David Amaya Mosquera
	Date: march 21th 2025
*/

let gradeOne=4.5;
let gradeTwo=3.5;
let gradeThree=2.0;
let percentOne;
let percentTwo;
let percentThree;
let endGrade;
let classification;

percentOne=gradeOne*0.2;
percentTwo=gradeTwo*0.35;
percentThree=gradeThree*0.45;
endGrade=percentOne+percentTwo+percentThree;

if(endGrade>4.5){
	console.log("Superior Grade.");
}
else if(endGrade>=3.5){
	console.log("Good Grade.");
}
else if(endGrade>=3.0){
	console.log("Medium Grade.");
}
else{
	console.log("Low Grade.");
}