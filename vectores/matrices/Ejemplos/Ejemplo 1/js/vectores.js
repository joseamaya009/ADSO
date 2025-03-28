/*
	Name exercise: Vectores
	Description: Vectores
	Autor: José David Amaya Mosquera
	Date: march 20th 2025
*/

let vector=[];
let iteration;
let number;

for(iteration=0;iteration<=15;iteration++){
	number=Math.floor(Math.random()*100);
	vector.push(number);
}

console.log(vector);

let maximo=Math.max(...vector);
let minimo=Math.min(...vector);

console.log("Maximo: "+ maximo);
console.log("Minimo: "+ minimo);


let even=vector.filter(number=>number%2==0);
let odd=vector.filter(number=>number%2!==0);
console.log("Pares: "+ even);
console.log("Impares: "+ odd);