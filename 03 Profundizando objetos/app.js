// 22
//------------------------------------------------------------------

//var arr = new Array();
var arr = [5,4,3,2,1];

//console.log(arr);
//console.log(arr[0],arr[4]);

arr.reverse();
//console.log(arr);

arr = arr.map(function(elem){
    elem *= elem;
    return elem;
});

//console.log(arr);

arr = arr.map(Math.sqrt);
//console.log(arr);

arr = arr.join("|");
//console.log(arr);

arr = arr.split("|");
//console.log(arr);

arr.push("6");
//console.log(arr);

arr.unshift("0");
//console.log(arr);

//console.log(arr.toString());

var elimine = arr.pop();
//console.log(arr,elimine);

arr.splice(1,0,"10","20","30");
//console.log(arr);

arr = arr.slice(0,2);
//console.log(arr);

// arr.length
// console.log(arr.length);

// 23
//------------------------------------------------------------------

var arr = [
    true,
    {
        nombre: "Akin",
        apellido: "Ramirez"
    },
    function(){
        //console.log("Estoy viviendo en un arreglo.");
    },
    function (persona){
        //console.log(persona.nombre+" "+persona.apellido);
    },
    [
        "Akin",
        "Carlos",
        "Cesar",
        "Melissa",
        [
            "Juan",
            "Pedro",
            "Dilcia",
            function(){
                //console.log(this);
            }
        ]
    ]
];

// console.log(arr);
// console.log(arr[0]);
// console.log(arr[1].nombre+" "+arr[1].apellido);
arr[2]();
arr[3](arr[1]);

// console.log(arr[4][4][1]);

var arr2 = arr[4][4];
arr2[1] = "Pedra!";

// console.log(arr2);
// console.log(arr);

arr2[3]();

// 24
//------------------------------------------------------------------
var arguments=10;

function miFuncion(a,b,c,d){
    if(arguments.length!=4){
        console.error("La funcion necesita 4 parametros");
        alert("La funcion necesita 4 parametros");
        return;
    }
    //console.log(arguments);
    console.log(a+b+c+d);

}   

//miFuncion(10,20,30,40,50);


// 25
//------------------------------------------------------------------

function crearProducto(nombre,precio){
    nombre = nombre || "sin nombre";
    precio = precio || 0 ;
    
    console.log("Producto ",nombre, " Precio ",precio );

}

function crearProducto100(nombre){
    crearProducto(nombre,100);
}

function crearProductoCamisa(precio){
    crearProducto("Camisa",precio);
}

// crearProducto("Lapiz");
// crearProducto100("Corrector");
// crearProductoCamisa(100);


// 26
//------------------------------------------------------------------

function determinaDato(a){
    if (a === undefined){
        console.log("A es undefined... no se que hacer");
    }
    if (typeof a === "number"){
        console.log("A es un numero, y puedo hacer operacion con numeros");
    }
    if (typeof a === "string"){
        console.log("A es un texto, puedo hacer operacion con textos");
    }
    if (typeof a === "object"){
        console.log("A es un objeto ... pero puede ser cualquier cosa...");

        if(a instanceof Number){
            console.log("A es un objeto numerico...");
        }
    }
}

var b = new Number(3);

// console.log(b);
// determinaDato(b);


// 27
//------------------------------------------------------------------

function crearFunciones(){
    var arr = [];
    var numero = 1;

    for(var numero = 1; numero <= 5; numero++){
        arr.push(
            (function(numero){
                return function(){       
                    console.log(numero);                    
                }
            })(numero)        
        );    
    }

    return arr;

}

var funciones = crearFunciones();

for(var i = 0; i < 5; i++){
    //funciones[i]();
}

// 28
//------------------------------------------------------------------

var a = 10.456789;
//var b = new Number(10);

// console.log(a.toFixed(5));

// a = a.toString();
// console.log(a);

// console.log(a.toPrecision(2));

a = 10;
// a *= 100000000000000000;
// a *= 100000000000000000;

//NaN = Not a number
// console.log(a);

var b = new Number("20");
// console.log(b);
// console.log(b.valueOf());


// 29
//------------------------------------------------------------------

// var a = true;
// var b = false;

//false
//var a = new Boolean(1);
//true
//var a = new Boolean(0);

var a = new Boolean();

//console.log(a.valueOf());

if(a.valueOf()){
    console.log("Me imprirmi");
}


// 30
//------------------------------------------------------------------

var a = new String("Akini Ramirez Garcia Flores");
var b = "Akin";

// console.log(a);
// console.log(a.toUpperCase());
// console.log(a.toLowerCase());

var i = a.indexOf("i");
// console.log("La letra esta en la posicion: ",i);

var i = a.lastIndexOf("i");
// console.log("La letra esta en la posicion: ",i);

//var nombre = a.substr(3,2);
var nombre = a.substr(0, a.indexOf(" "));
// console.log(nombre);

var split = a.split(" ");
// console.log(split);
// console.log(split.length);

//==============================

//document.write(a.italics());


// 31
//------------------------------------------------------------------

var hoy = new Date();
var fMili = new Date(0);
//anio, mes, dia, hora, min, seg, mili
var fFija = new Date(2017, 10, 22, 16, 08, 15, 1);

// console.log(hoy);
// console.log(fMili);
// console.log(fFija);
// console.log(hoy.getFullYear()+1);

var inicio = new Date();

// for(var i = 0; i< 1500; i++){
//     console.log("Algo...")
// }

var fin = new Date();

// console.log(inicio);
// console.log(fin);

var duracion = fin.getTime() - inicio.getTime();
// console.log(duracion, " milisegundos");
// console.log(duracion/1000, " milisegundos");


// 32 - Operaciones con Fechas
//------------------------------------------------------------------

var fecha = new Date(2016,09,20);

// fecha.setDate(25);
// console.log(fecha);

Date.prototype.sumarDias = function(dias){
    this.setDate(this.getDate()+dias);
    return this;
}

Date.prototype.sumarAnios = function(anios){
    this.setFullYear(this.getFullYear()+anios);
    return this;
}

// console.log(fecha.sumarDias(15));
// console.log(fecha.sumarAnios(5));


// 33
//------------------------------------------------------------------

var PI = Math.PI;
var E  = Math.E;

// console.log(PI);
// console.log(E);

var num1 = 10.956789;
// console.log(num1);
// console.log(Math.round(num1*100)/100);
// console.log(Math.floor(num1));

function randomEntre(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

// console.log(randomEntre(1,6));

// console.log(Math.sqrt(25));

// console.log(Math.pow(7,2));


// 34
//------------------------------------------------------------------

//var reg1 = RegExp("a");
//var reg2 = /a/;
// i = insensible
// g = todas las apariciones
// m = miltilinea

var texto = "Hola Mundo";

//var arr = texto.match(reg2); //null
var arr = texto.match(/s/); //null
//console.log(arr);


// 35
//------------------------------------------------------------------

var texto = "La respuesta de la suma es: 45 + 60 = 105";
console.log(texto);

var arr = texto.match(/\d{1,}|respuesta/ig); 
console.log(arr);
