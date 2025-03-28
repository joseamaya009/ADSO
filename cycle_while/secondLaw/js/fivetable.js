/*
	Name exercise: Force with Newton's Second Law
	Description: Calculating Force with Newton's Second Law
	Autor: José David Amaya Mosquera
	Date: march 23th 2025
*/
let totalForce = 0;
let count = 0;

while (true) {
    let mass =;
    let acceleration =;
    
    if (mass < 0 || acceleration < 0) {
        console.log("Programa finalizado");
        console.log("Número de cálculos realizados: " + count);
        console.log("Suma total de fuerzas calculadas: " + totalForce+ " N");
        break;
    }
  
    let force = mass * acceleration;
    console.log("Fuerza calculada: " + force + " N");
    
     totalForce = totalForce + force;
    console.log(totalForce)
    count++;
}
