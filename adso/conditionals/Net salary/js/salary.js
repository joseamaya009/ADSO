/*
	Name exercise: Net salary
	Description: Net salary
	Autor: José David Amaya Mosquera
	Date: march 21th 2025
*/

let salary=3000000;
let minimumWage=1160000;
let transport=114000;
let health;
let pension;
let arl;
let totalSalary;

health=salary*0.12;
pension=salary*0.16;
arl=salary*0.052;
if(salary<minimumWage*2){
salary=salary+transport;
}
if(salary>minimumWage*4){
totalSalary=(salary*0.96)-health-pension-arl;
}
else{
totalSalary=salary-health-pension-arl;
}
	console.log("Total salary to be paid: ", totalSalary);