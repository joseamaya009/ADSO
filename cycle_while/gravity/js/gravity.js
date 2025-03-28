/*
	Name exercise: Gravitational Potential Energy
	Description:Calculation of Gravitational Potential Energy
	Autor:José David Amaya Mosquera
	Date: march 23th 2025
*/
const gravedad = 9.81;
let totalEnergia = 0;
let contadorEnergia = 0;

while (true) {
  let altura = 12;
  if (altura < 0) {
    console.log("Altura negativa ingresada. Fin del programa.");
    break;
  }
  
  let masa = 20;
  let energiaPotencial = masa * gravedad * altura;
  console.log("La energía potencial es: " + energiaPotencial );
  
  totalEnergia += energiaPotencial;
  contadorEnergia++;
}

console.log("Se realizaron " + contadorEnergia + " calculos con una energia potencial total acumulada de " + totalEnergia );