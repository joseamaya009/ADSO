/*
	Name exercise: Force with Newton's Second Law
	Description: Calculating Force with Newton's Second Law
	Autor: José David Amaya Mosquera
	Date: march 23th 2025
*/
let totalFuerza = 0;
let contador = 0;
let masa = 5;
let aceleracion = 7;
while (masa >= 0 && aceleracion >= 0) {
    if (masa < 0 || aceleracion < 0) {
        console.log("Valor negativo ingresado. Fin de los cálculos.");
        break;
    } else {
        let fuerza = masa * aceleracion;
        console.log("La fuerza calculada es: " + fuerza + " N");
        totalFuerza += fuerza; // Puedes usar esta forma más compacta
        contador = contador +1;
    }
  break;
}

console.log("Se realizaron " + contador + " calculos con una fuerza total acumulada de " + totalFuerza + " N.");