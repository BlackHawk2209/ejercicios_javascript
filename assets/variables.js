/* var variable1= 'soy la variable 1';
variable1 ='Hola a todos';

let variable2= 'soy la variable 2';
const variable_contante='123423'; //This is a value constante 


function varTest(){
    let variable3= 'Soy la variable 2';
    var x=31;
    if(true){
        var x= 71;
        console.log(x);
    }
    console.log(x);
}

console.log(variable3); // Don´t take this var3 because is under function 
 */

// let nos ayuda con los scopes se usan en ciclos para que se queden los datos alli
//Este tipo de trabajos sirve para la optimisacion de memoria. 
function varTest(){
    var x=31;
    if(true){
        var x=71;
        console.log(x); // vale 71 porque cambia en el if
    }
        console.log(x); //sigue valiendo 71 por que es var y aploca como var local
}

varTest();

function letTest(){
    let x= 31;
    if(true){
        let x =71;
        console.log(x); //vale 71 cambia el valor
    }
    console.log(x);// sigue valiendo 31 porque el let solo se qued en el ciclo
}

letTest();

const nuevaFuncion= () =>{
    var x =31;
    if(true){
        var x = 71;
        console.log(x);
    }
    console.log(x);
}

nuevaFuncion();

