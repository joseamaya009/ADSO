/*
	Name exercise: counter for
	Description: counter
	Autor: AndresMC
	Date: march 15th 2025
*/

let counter;
let calculations=5;
let mass=Math.floor(Math.random()*(100-1+1))+1;
let acceleration=Math.floor(Math.random()*(50-1+1))+1;
let force;

for (counter=0;counter<=calculations;counter++){
    force=mass++*acceleration++;
    console.log("Calculations:"+ counter);
    console.log("Acceleration:"+ acceleration);
    console.log("Resultant Force:"+ force);
}
