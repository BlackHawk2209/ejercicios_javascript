

function recibir(){
    //Traer variables del index
    let formulario=document.forms['formulario'];
    let x=formulario['payasos'];
    let y=formulario['munecas'];

    //valor de las variables
    var munecas= x.value;
    var payasos=y.value;

    //Pesos de payasos y de muñecas
    var peso_munecas=munecas*75;
    var peso_payasos=payasos*112;

    //Pesos total sumado del pesos de paysos y muñecas
    var peso_total=peso_payasos+peso_munecas;

    //Numero de cajas de a kilo
    var numero_kilo = peso_total/1000;
    console.log("Peso total del paquete: ", numero_kilo);

    
    var numero_sobrante= peso_total%1000;
    var numero_cajas=0;


    if(numero_sobrante=0){
        numero_cajas=numero_kilo;
    }else{
        numero_cajas=parseInt(numero_kilo+1);

    }

    console.log("El numero de cajas de a kilo es: ", numero_cajas);
     
}