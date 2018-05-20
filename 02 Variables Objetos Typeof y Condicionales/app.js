// 08
//------------------------------------------------------------------
//Tipo de datos primitivas 
// var num = 10;
// var str = "texto";
// var bol = true;
// var und = undefined;
// var nul = null;

// console.log(num);
// num = str;
// console.log(num);
// bol = 10;
// console.log(bol);

//Objetos
// var obj = {
//     numero : 10,
//     text : "nuevo_texto",

//     objHijo : {
//         numero2 : 20,
//         text : "nuevo_texto"
//     }
// };
// console.log(obj);

// 09
//------------------------------------------------------------------
// var a = 10;
// var b = a;
// console.log("a: ",a);
// console.log("b :",b);
// var a = 20;
// console.log("a: ",a);
// console.log("b :",b);

// var c = {
//     nombre : "Juana"
// }
// var d = c;
// console.log("c: ",c);
// console.log("d :",d);

// c.nombre = "Maria";
// console.log("c: ",c);
// console.log("d :",d);

// d.nombre = "Pedro";
// console.log("c: ",c);
// console.log("d :",d);

// 10
//------------------------------------------------------------------

// var persona = {
//     nombre : "Juana",
//     apellido : "Herrera",
//     edad : 25,
//     direccion : {
//         pais : "Costa Rica",
//         ciudad : "San Jose",
//         edificio : {
//             nombre : "Edificion Principal",
//             telefono : "2222-3333"
//         }
//     }
// }

// console.log(persona.nombre);
// console.log(persona.apellido);
// console.log(persona.edad);
// console.log(persona.direccion.pais);

// persona.direccion.zipcode = 11101;

// console.log(persona.direccion);
// console.log(persona.direccion.zipcode);
// console.log(persona.direccion.edificio.telefono);

// var edificio = persona.direccion.edificio;
// edificio.nupiso = "8vo piso";
// console.log(persona);

// var campo = "edad";
//var campo = "edad2"; -- undefined
// console.log(persona["nombre"]);
// console.log(persona["direccion"]["pais"]);
// console.log(persona[campo]);

// 12
//------------------------------------------------------------------

// var a = 40;

// function primeraFuncion (){
//     //var a = 20;
//     console.log("Invocada");
// }

//--primeraFuncion();
//--var miFuncion = primeraFuncion();

//var miFuncion = primeraFuncion;
//console.log(miFuncion);

// 13
//------------------------------------------------------------------

//--Funcion con parametros variables primitivas
// function imprimir(nombre, apellido){
//     apellido = apellido || "xxx";

//     // if(apellido===undefined){
//     //     apellido = "xxx";
//     // }

//     console.log(nombre + " " + apellido);
// }

// imprimir("Juan","Martinez");

//--Funcion con parametro Objetos
// var persona = {
//     nombre : "Akin",
//     apellido : "Ramirez"
// }

// var miFuncion = function(){
//     console.log("miFuncion");
// }

//--Con objeto
// function imprimir(persona){
//     console.log(persona.nombre + " " + persona.apellido);
//     persona.nombre = "Maria";
// }

//--Con funcion
// function imprimir(fn){
//     fn();
// }

//--Objeto
// imprimir(persona);
// console.log(persona);

//--Funcion anonima
// imprimir( function(){
//     console.log("Funcion Anonima");
// })

//--Funcion explicita
// imprimi

// 14
//------------------------------------------------------------------
//El Retorno de Funciones

function obtenerAleatorio(){
    return Math.random();
}
//console.log(obtenerAleatorio()+10);

function obtenerNombre(){
    return "Juan";
}
var nombre = obtenerNombre();
//console.log(nombre +" Padilla");

function esMayor05(){
    if(obtenerAleatorio()>0.5){
        return true;
    }else{
        return false;
    }
}

//console.log(esMayor05());


// if(esMayor05()){
//     console.log("Es mayor a 0.5");
// }else{
//     console.log("Es menor a 0.5");
// }


function crearPersona(nombre,apellido){

    return {
        nombre : nombre,
        apellido : apellido
    }
}

var persona = crearPersona("Susana","Paz");
// console.log(persona);
// console.log(persona.nombre);
// console.log(persona.apellido);


function creaFuncion(){
    return function(nombre){
        console.log("Me creo " + nombre);
        return function(){
            console.log("Segunda funcion");
        }
    }
}
//var nuevaFuncion = creaFuncion();
//nuevaFuncion(persona.nombre);
//var segundaFuncion = nuevaFuncion(persona.nombre);
//segundaFuncion();

// 15
//------------------------------------------------------------------

function a(){
    console.log("Funcion a");
}

//a();

a.nombre = "Maria";
a.direccion = {
    pais: "Honduras",
    Ciudad: "Tegucigalpa",
    edificio: {
        piso: "8vo",
        nombre: "Edificio principal"
    }
}


// 16
//------------------------------------------------------------------

var persona = {
    nombre: "Maria",
    apellido: "Dubon",
    imprimirNombre(){
        console.log("Nombre Completo : "+this.nombre+ " "+ this.apellido);
    },
    direccion:{
        pais: "Honduras",
        obtenerPais: function(){
            var self = this;
            console.log("La direccion es en " + this.pais);
            var nuevaDireccion = function(){     
                console.log(self);           
                console.log(self.pais);
            }
            nuevaDireccion();
        }
    }
}
// persona.nombre = "Andres";
// persona.imprimirNombre();
// persona.direccion.obtenerPais();

// 17
//------------------------------------------------------------------

//var carlos = new persona();

function Persona(nombre, apellido,edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.imprimirPersona = function(){
        return this.nombre + " " + this.apellido + "(" + this.edad + ")"; 
    }
}
var juan = new Persona("Akin","Ramirez",27);
// console.log(juan);
// console.log(juan.nombre);
// console.log(juan.imprimirPersona());

// 18
//------------------------------------------------------------------

function Jugador(nombre){
    this.nombre = nombre;
    this.pv = 100;
    this.sp = 100;
    this.curar = function(jugadorObjetivo){
        if(this.sp>=40){
            this.sp -= 40;
            jugadorObjetivo.pv += 20;
        }else{
            console.info(this.nombre + " no tiene sp ")
        }        
        this.estado(jugadorObjetivo);
    }
    this.tirarFlecha = function(jugadorObjetivo){
        if(jugadorObjetivo.pv>40){
            jugadorObjetivo.pv-=40;
        }else{
            jugadorObjetivo.pv = 0;
            console.error(jugadorObjetivo.nombre + " murio!!!");
        }
        this.estado(jugadorObjetivo);
    }

    this.estado = function(jugadorObjetivo){
        console.log(this);
        console.log(jugadorObjetivo);
    }
}

var gandalf = new Jugador("Gandals");
var legolas = new Jugador("Legolas");

// console.log(gandalf);
// console.log(legolas);
//gandalf.curar(legolas);


// 19
//------------------------------------------------------------------

function Personas(){
    this.nombre = "Akin";
    this.apellido = "Ramirez";
    this.edad = 27;
    this.pais = "Honduras";
    
}

//Personas.prototype.pais = "Honduras";
Personas.prototype.imprimirInfo = function(){
    console.log(this.nombre + " " + this.apellido + "("+this.edad+")" );
}

var akin = new Personas();
//akin.imprimirInfo();
// console.log(akin);
// console.log(akin.imprimirInfo());

var a = "akin";

Number.prototype.esPositivo = function(){
    if(this>0){
        return true;
    }else{
        return false;
    }
}

// 20
//------------------------------------------------------------------

//Funcion anonima - Da erro por que tiene que estar sola osea por el motivo que empieza ().
(function(){
    a = 10;
    console.log(a);
    
    function cambiarA(){
        a = 20;
    }
    
    cambiarA();

    console.log(a);

})//();


function ejecutarFuncion (fn){
    if(fn()===1){
        return true;
    }else{
        return false;
    }    
} 

// console.log(
//     ejecutarFuncion(function(){
//         console.log("Funcion anonima ejecutada!")
//         return 0;
//     })
// ); 

// 21
//------------------------------------------------------------------

function identifica (param){
    //console.log(typeof param);
    // if(typeof param == "function"){
    //     param();
    // }else{
    //     console.log(param);
    // }
    console.log(param instanceof Persona);

}

function Persona(){
    this.nombre = "Akin";
    this.apellido = "Ramirez";
    this.edad = 27;

}

var akin = new Persona();


identifica(function(){console.log("Soy anonima")});
identifica(2);
identifica(akin);
identifica("akin");