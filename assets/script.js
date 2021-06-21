
var dato1= 24;
var dato2= "Holaaaaa";
var dato3="false";
var dato4="5.3722497924872894728429472847284729482984728947284728472947294872847";
var dato5=true;
var dato6=null;
var dato7="Hoy es un lindo dia";
var dato8=829;
var dato9="null";
var dato10=false;

var suma=parseInt(dato4) + dato8;
//Tomamos el digito lo imprime como string toma 30 digitos pero genera numeros raros, sale string  
console.log('ParseFloat: ', parseFloat(dato4).toPrecision(30));

//Con el toFixed te imprime el fotante entero
console.log(dato4.toFixed(30));

console.log("Suma: ", suma);

console.log(typeof(dato1));
console.log(typeof(dato2));
console.log(typeof(dato3));
console.log(typeof(dato4));
console.log(typeof(dato5));
console.log(typeof(dato6));
console.log(typeof(dato7));
console.log(typeof(dato8));
console.log(typeof(dato9));
console.log(typeof(dato10));
