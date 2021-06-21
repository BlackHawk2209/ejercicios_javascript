
function recibir(){
    let formulario=document.forms['formulario'];
    var x=formulario['entero'];


var suma=0;
var n=x.value;

for( var i=0; i<=n; i++){
    suma= suma+i;

}

console.log("Suma total:",suma);
}
