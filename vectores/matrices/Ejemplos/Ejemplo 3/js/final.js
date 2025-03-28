/*
	Name exercise: Vectores
	Description: Vectores
	Autor: José David Amaya Mosquera
	Date: march 20th 2025
*/

let n = 4;
let m = 4;

let matriz = [];
for (let i = 0; i < n; i++) {
  let fila = [];
  for (let j = 0; j < m; j++) {
    fila.push(Math.floor(Math.random() * 100));
  }
  matriz.push(fila);
}

let sumaFila = matriz.map(fila =>
  fila.reduce((acum, valor) => acum + valor, 0)
);

let sumColumnas = [];
for (let j = 0; j < m; j++) {
  let suma = 0; 
  for (let i = 0; i < n; i++) {
    suma += matriz[i][j];
  }
  sumColumnas.push(suma);
}

console.log("Matriz generada:");
console.log (matriz);

console.log("Suma de cada fila:");
console.log(sumaFila);

console.log("Suma de cada columna:");
console.log(sumColumnas)