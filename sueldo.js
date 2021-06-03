//OperadoresAritmeticos
console.log('OPERADORES ARITMETICOS');
var numero1= parseFloat(prompt('Ingresa el primer numero= '));
var numero2 = parseFloat(prompt('Ingresa el numero 2= '));

var suma= numero1+numero2;
console.log('El resultado de la suma es= ' + suma);

var resta= numero1-numero2;
console.log('El resultado de la resta es= ' + resta);

var multiplicacion = numero1*numero2;
console.log('El resultado de la multiplicacion es= ' + multiplicacion);

if(numero2!=0){
var division= numero1/numero2;
console.log('El resultado de la divison es= ' + division);
}else{
    console.log('No se puede dividir entre 0');
}


//CONDICIONALES
console.log('CONDICIONALES');
var edad = parseInt(prompt('Ingresa tu edad: '));
if(edad>=18 && edad<= 29){
    console.log('Puedes ingresar a Generation');
}else{
    console.log('No cumples con los requisitos');
}


//NOMINA
console.log('NOMINA');
var salarioDia= parseFloat(prompt('Ingresa el salario por dia: '));


 //Calculo de salario Bruto mensual y quincenal
var sueldoMes= salarioDia*30;
var sueldoQuincenal= salarioDia*15;

console.log('El sueldo bruto por mes= ' + sueldoMes );
console.log('El sueldo bruto por quincena= ' + sueldoQuincenal);


 //Calculo de salario Neto mensual y quincenal
 var sueldoNeto= parseFloat(salarioDia-(0.40*salarioDia));


console.log('El sueldo neto por mes= ' + (sueldoNeto*30));
console.log('El sueldo neto por quincena= ' + (sueldoNeto*15));

