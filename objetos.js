var persona= {
    nombre:'Braulio',
    apellido: 'Garrido',
    edad: 25,

    saludar: function(){ 
        console.log("Hola soy " + this.nombre + " " + this.apellido);
    },

    MiEdad: function(){
        console.log("Tengo " + this.edad + " años");
    }

};


persona.saludar();
persona.MiEdad();





function nuevaPersona(){

    var persona2= {
        nombre:"", 
        edad: 0, 
        apellido: "",

        saludar: function(){
            console.log("Mi nombre es: " + this.nombre);
        }

    };

    

    
    persona2.nombre= prompt("Ingrese su nombre: ");
    persona2.edad= prompt("Ingrese su edad: ");
    persona2.apellido= prompt("Ingrese su apellido: ");

       persona2.saludar(); 
};