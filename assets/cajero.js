
var quinientos=7;
var doscientos=14;
var cien=24;
var cincuenta=6;

var cantidad_dinero=(quinientos*500)+(doscientos*200)+(cien*100)+(cincuenta*50);
console.log(cantidad_dinero);


var cantidad_retiro=8750;
console.log(cantidad_retiro);



function dineroRetirado(){
    let formulario=document.forms['formulario'];
    var valor = formulario['retiro'];
    console.log(valor.value);
    cantidad_retiro=parseInt(valor.value);

}
 
    



//FUNCIONES
function retiro(cantidad_dinero, cantidad_retiro, quinientos, doscientos, cien, cincuenta){

    if(cantidad_dinero >= cantidad_retiro){
        console.log("Si hay suficiente dinero");
        
        //Para retirar 500
                if(cantidad_retiro>=500){
                    var x= parseInt(cantidad_retiro/500);
                    if(quinientos>=x){ //Si hay billetes de 500 suficientes
                        cantidad_retiro= cantidad_retiro-(500*x);
                        quinientos=quinientos-x; //Cuantos de 500 me quedan
                         //x   Billetes de 500 que me da.                        
                    }else{//No hay billetes suficioentes.
                        cantidad_retiro=cantidad_retiro-(500*quinientos);
                        x=quinientos;  //Billetes que me da
                        quinientos=0;
                    }
                    
                    
                }else{
                    x=0;
                }
                    
                
                    
        //Para retirar 200
                if(cantidad_retiro>=200){
                    var y= parseInt(cantidad_retiro/200);
                    if(doscientos>=y){
                        cantidad_retiro=cantidad_retiro-(200*y);
                        doscientos= doscientos-y;
                        //Billetes que me da y
                    }else{
                        cantidad_retiro=cantidad_retiro-(doscientos*200);
                        y=doscientos;
                        doscientos=0;
                    }             
                }else{
                    y=0;
                }
                

        //Para retirar 100
                    if(cantidad_retiro>=100){
                        var w=parseInt(cantidad_retiro/100);
                        if(cien>=w){
                            cantidad_retiro=cantidad_retiro-(100*cien);
                            cien=cien-w;
                             //w Los billetes que nos regresa el cajero
                        }else{
                            cantidad_dinero=cantidad_dinero-(cien*100);
                            w=cien;
                            cien=0;
                        }             
                    }else{
                        w=0;
                    }
        //Para retirar 50
                    if(cantidad_retiro>=50){
                        var z=parseInt(cantidad_retiro/50);
                        if(cincuenta>=z){
                            cantidad_retiro=cantidad_retiro-(50*cincuenta);
                            cincuenta=cincuenta-z;
                            //z Los billetes que nos da el cajero
                            
                        }else{
                            cantidad_dinero=cantidad_dinero-(50*cincuenta);
                            z=cincuenta;
                            cincuenta=0;
                        }
                    }else{
                        z=0;
                    }
                    
                    }else{
        console.log("No hay suficiente dinero");
    }

    console.log("Esto es lo que se recupero en la fase final", x , y, w, z);

    document.getElementById('valores').innerHTML=x + "Billetes de 500"+ "      " + y + " Billetes de 200";

this.cincuenta=cincuenta;
this.cien=cien;
this.quinientos=quinientos;
this.doscientos=doscientos;
}



function aviso(quinientos, doscientos, cien, cincuenta){
            if(quinientos==null || quinientos==0){
                console.log("Ya no hay billetes de 500");
            }
            if(doscientos==null|| quinientos==0){
                console.log("Ya no hay billetes de 200");
            }
            if(cien==null||cien==0){
                console.log("Ya no hay billetes de 100");
            }
            if(cincuenta==null||cincuenta==0){
                console.log("Ya no hay billetes de 50");
            }
}