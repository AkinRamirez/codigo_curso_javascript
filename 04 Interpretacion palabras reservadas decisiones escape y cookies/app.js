// 36
//------------------------------------------------------------------

// var a = 10
// var b = 20
// var c = 30
// var d = "Akin"

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

//Comentario linea simple
/*
    Comentario multi linea
    Comentario multi linea
    Comentario multi linea
*/


function getNumero(){
    return 10;
}
//console.log(getNumero());

// 37
//------------------------------------------------------------------

var miArreglo = [
        //La primera por......
        //sirve para...
        //hace.....
        "Akin",{
        
        //La segunda... 
        //es un objeto...
        //hace...
        //Esta propiedad hace...
        //por lo cual...
        //es bueno que...
        nombre:
            "Arturo",

        //Esta propiedad hace...
        //por lo cual...
        //es bueno que...
        apellido: 
        "Garcia",

        //Esta funcion hace...
        //por lo cual...
        //es bueno que...
        //no tiene parametro... 
        //pero puede...
        getNombre: function(){
            return this.nombre+ " " + this.apellido;
            
        }
    },
    //Tercera posicion del arreglo...
    true,
    
    //Funcion de la cuarta...
    //...
    function(){
        console.log(this);
    }


//Fin del arreglo principal
//no hacer nada despues   
//no hacer nada despues  
//no hacer nada despues  
//no hacer nada despues  
];

// console.log(
//     miArreglo
//     );


// 38
//------------------------------------------------------------------

/*
	Palabras reservadas
	Y buenas practicas
 */

// abstract
// boolean
// break
// byte
// case
// catch
// char
// class
// const
// continue
// debugger
// default
// delete
// do
// double
// else
// enum
// export
// extends
// false
// final
// finally
// float
// for
// function
// goto
// if
// implements
// import
// in
// instanceof
// int
// interface
// long
// native
// new
// null
// package
// private
// protected
// public
// return
// short
// static
// super
// switch
// synchronized
// this
// throw
// throws
// transient
// true
// try
// typeof
// var
// void
// volatile
// while
// with

// 39
//------------------------------------------------------------------

//No agregar throw en el codigo principal por que dara error.
//throw 'Error!!!'

try{
    // var a = 100;
    // if(a===100){
    //     throw 'que mal';
    // }else{
    //     throw 'oh oh!';
    // }
    // console.log("El valor de a ",a);
    
    //throw new Error('Error tipo 1');

    // throw{
    //     nombreError:"Error tipo 1",
    //     accion: "Salir corriendo a echarle agua al servidor",
    //     codeerror: 1
    // }

    // throw function(){
    //     console.log("Funcion del throw...");
    // }

    //console.log("Esta parte nunca se ejecuta");

    //Para catalogo de errores
    throw 1; //n cualquier valor

}catch(e){
    // if(e==='que mal'){
    //     console.log("Error tipo 1");
    // }
    // if(e==='oh oh!'){
    //     console.log("Error tipo 2");
    // }
    // console.log("Error! de catch: ",e);
    
    //console.log(e.message);    
    
    //console.log(e);
    // console.log(e.nombreError);
    // console.log(e.accion);
    // console.log(e.codeerror);

    //console.log("Parte del catch");

    //e();    
    //registroError(e);
}finally{
    //console.log("Finalmente");
}


function registroError(e){
    var ahora = new Date();
    //Ajax...
    console.log("Se registro un error: ", e, "a las: ", ahora.getTime());
}


// 41
//------------------------------------------------------------------

//Iniciar servidor web en node.js
//http-server C:\js -p 8085


// 42
//------------------------------------------------------------------

function crearCookie(nombre, valor){
    
    valor = escape(valor);

    var hoy = new Date();
    hoy.setMonth(hoy.getMonth()+1);

    document.cookie = nombre + "=" + valor + ";expires="+hoy.toUTCString()+";"

}

function borrarCookie(nombre){
    var hoy = new Date();
    hoy.setMonth(hoy.getMonth()-1);

    document.cookie = nombre + "=x;expires=" + hoy.toUTCString()+";"
}


function getCookie(nombre){
    var cookies = document.cookie;
    var cookieArr = cookies.split("; ");
    //console.log(cookieArr);

    for (var i = 0; i < cookieArr.length; i++){
        var parArr = cookieArr[i].split("=");
        cookieArr[i] = parArr;

        if(parArr[0]===nombre){
            return unescape(parArr[1]);
        }
    }
    return undefined;
}

//console.log(getCookie("nombre"));


// crearCookie("nombre","Arturo");

// crearCookie("nombre","Akin");
// crearCookie("correo","akin.ramirez@hotmail.com");
// crearCookie("direccion","Honduras, Tegucigalpa M.D.C");

//borrarCookie("nombre");


// var demo = "123;123*123'123/ 123";
// console.log(demo);
// console.log(escape(demo));
// console.log(unescape(demo));

//document.cookie = "nombre=akin";
//document.cookie = "apellido=ramirez";

// var cookies = document.cookie;
// console.log(cookies);

// 43
//------------------------------------------------------------------    

var carro = {
    color: "Blanco",
    marca: "Mazda",
    imprimir: function (){
        var salida = this.marca + " " + this.color;
        return salida;
    }
}

var carro2 = {
    color: "Rojo",
    marca: "Toyota"
}

//console.log(carro.imprimir());

var logCarro = function(arg1, arg2){

    console.log("Carro: ",this.imprimir());
    console.log("Argumentos:",arg1,arg2);
    console.log("============================");
    
}

//logCarro(); //Ejemplo que da error por que la funcio no esta dentro de la funcion que se ejecuta.

var logModeloCarro = logCarro.bind(carro);

// logModeloCarro("abc","xyz");

// logModeloCarro.call(carro,"123","456");

// logModeloCarro.apply(carro,["asd","qwe"]);

//Esto nos serviria para aplicar el termino de funciones prestadas
// console.log(carro.imprimir.call(carro2));


// 44
//------------------------------------------------------------------    

// var nota = 55;

// if(nota >= 90){
//     console.log("A");
// }else if(nota >= 80){
//     console.log("B");
// }else if(nota >= 70){
//     console.log("C");
// }else if(nota >= 60){
//     console.log("D");
// }else{
//     if(nota < 50 ){
//         console.log("-F");
//     }else{
//         console.log("+F");
//     }    
//     console.log("Algo por aqui...");
// }
// console.log("Termino el codigo");

// var a = 10;
// var b = 20;

var a = 10;
//var b = undefined;
var b = 20;

//====================================================

//var c = 0;

//====================================================

//var c = (a>b)? a : b;

//====================================================
// var c = (a>b)? 
//     function(){

//     console.log("A es mayor que B");
//     return a;

//     }(): 
//     function(){

//     console.log("B es mayor que A");
//     return b;

//     }();

//====================================================
//Esta declaracion agarra siempre la primera variable
var c = a || b;

//====================================================

// if(a>b){
//     c=a;
// }else{
//     c=b;
// }

//console.log(c);


function getNombre(nombre){
    var nomb = nombre || null ||"<sin nombre>";
    console.log(nomb);
}

// getNombre();


// 45
//------------------------------------------------------------------ 

var mes = 2;

switch(mes){
    case 1:
        console.log("Enero");
    case 1:
        console.log("Enero");
        case 1:
        console.log("Enero");
}// 36
//------------------------------------------------------------------

// var a = 10
// var b = 20
// var c = 30
// var d = "Akin"

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

//Comentario linea simple
/*
    Comentario multi linea
    Comentario multi linea
    Comentario multi linea
*/


function getNumero(){
    return 10;
}
//console.log(getNumero());

// 37
//------------------------------------------------------------------

var miArreglo = [
        //La primera por......
        //sirve para...
        //hace.....
        "Akin",{
        
        //La segunda... 
        //es un objeto...
        //hace...
        //Esta propiedad hace...
        //por lo cual...
        //es bueno que...
        nombre:
            "Arturo",

        //Esta propiedad hace...
        //por lo cual...
        //es bueno que...
        apellido: 
        "Garcia",

        //Esta funcion hace...
        //por lo cual...
        //es bueno que...
        //no tiene parametro... 
        //pero puede...
        getNombre: function(){
            return this.nombre+ " " + this.apellido;
            
        }
    },
    //Tercera posicion del arreglo...
    true,
    
    //Funcion de la cuarta...
    //...
    function(){
        console.log(this);
    }


//Fin del arreglo principal
//no hacer nada despues   
//no hacer nada despues  
//no hacer nada despues  
//no hacer nada despues  
];

// console.log(
//     miArreglo
//     );


// 38
//------------------------------------------------------------------

/*
	Palabras reservadas
	Y buenas practicas
 */

// abstract
// boolean
// break
// byte
// case
// catch
// char
// class
// const
// continue
// debugger
// default
// delete
// do
// double
// else
// enum
// export
// extends
// false
// final
// finally
// float
// for
// function
// goto
// if
// implements
// import
// in
// instanceof
// int
// interface
// long
// native
// new
// null
// package
// private
// protected
// public
// return
// short
// static
// super
// switch
// synchronized
// this
// throw
// throws
// transient
// true
// try
// typeof
// var
// void
// volatile
// while
// with

// 39
//------------------------------------------------------------------

//No agregar throw en el codigo principal por que dara error.
//throw 'Error!!!'

try{
    // var a = 100;
    // if(a===100){
    //     throw 'que mal';
    // }else{
    //     throw 'oh oh!';
    // }
    // console.log("El valor de a ",a);
    
    //throw new Error('Error tipo 1');

    // throw{
    //     nombreError:"Error tipo 1",
    //     accion: "Salir corriendo a echarle agua al servidor",
    //     codeerror: 1
    // }

    // throw function(){
    //     console.log("Funcion del throw...");
    // }

    //console.log("Esta parte nunca se ejecuta");

    //Para catalogo de errores
    throw 1; //n cualquier valor

}catch(e){
    // if(e==='que mal'){
    //     console.log("Error tipo 1");
    // }
    // if(e==='oh oh!'){
    //     console.log("Error tipo 2");
    // }
    // console.log("Error! de catch: ",e);
    
    //console.log(e.message);    
    
    //console.log(e);
    // console.log(e.nombreError);
    // console.log(e.accion);
    // console.log(e.codeerror);

    //console.log("Parte del catch");

    //e();    
    //registroError(e);
}finally{
    //console.log("Finalmente");
}


function registroError(e){
    var ahora = new Date();
    //Ajax...
    console.log("Se registro un error: ", e, "a las: ", ahora.getTime());
}


// 41
//------------------------------------------------------------------

//Iniciar servidor web en node.js
//http-server C:\js -p 8085


// 42
//------------------------------------------------------------------

function crearCookie(nombre, valor){
    
    valor = escape(valor);

    var hoy = new Date();
    hoy.setMonth(hoy.getMonth()+1);

    document.cookie = nombre + "=" + valor + ";expires="+hoy.toUTCString()+";"

}

function borrarCookie(nombre){
    var hoy = new Date();
    hoy.setMonth(hoy.getMonth()-1);

    document.cookie = nombre + "=x;expires=" + hoy.toUTCString()+";"
}


function getCookie(nombre){
    var cookies = document.cookie;
    var cookieArr = cookies.split("; ");
    //console.log(cookieArr);

    for (var i = 0; i < cookieArr.length; i++){
        var parArr = cookieArr[i].split("=");
        cookieArr[i] = parArr;

        if(parArr[0]===nombre){
            return unescape(parArr[1]);
        }
    }
    return undefined;
}

//console.log(getCookie("nombre"));


// crearCookie("nombre","Arturo");

// crearCookie("nombre","Akin");
// crearCookie("correo","akin.ramirez@hotmail.com");
// crearCookie("direccion","Honduras, Tegucigalpa M.D.C");

//borrarCookie("nombre");


// var demo = "123;123*123'123/ 123";
// console.log(demo);
// console.log(escape(demo));
// console.log(unescape(demo));

//document.cookie = "nombre=akin";
//document.cookie = "apellido=ramirez";

// var cookies = document.cookie;
// console.log(cookies);

// 43
//------------------------------------------------------------------    

var carro = {
    color: "Blanco",
    marca: "Mazda",
    imprimir: function (){
        var salida = this.marca + " " + this.color;
        return salida;
    }
}

var carro2 = {
    color: "Rojo",
    marca: "Toyota"
}

//console.log(carro.imprimir());

var logCarro = function(arg1, arg2){

    console.log("Carro: ",this.imprimir());
    console.log("Argumentos:",arg1,arg2);
    console.log("============================");
    
}

//logCarro(); //Ejemplo que da error por que la funcio no esta dentro de la funcion que se ejecuta.

var logModeloCarro = logCarro.bind(carro);

// logModeloCarro("abc","xyz");

// logModeloCarro.call(carro,"123","456");

// logModeloCarro.apply(carro,["asd","qwe"]);

//Esto nos serviria para aplicar el termino de funciones prestadas
// console.log(carro.imprimir.call(carro2));


// 44
//------------------------------------------------------------------    

// var nota = 55;

// if(nota >= 90){
//     console.log("A");
// }else if(nota >= 80){
//     console.log("B");
// }else if(nota >= 70){
//     console.log("C");
// }else if(nota >= 60){
//     console.log("D");
// }else{
//     if(nota < 50 ){
//         console.log("-F");
//     }else{
//         console.log("+F");
//     }    
//     console.log("Algo por aqui...");
// }
// console.log("Termino el codigo");

// var a = 10;
// var b = 20;

var a = 10;
//var b = undefined;
var b = 20;

//====================================================

//var c = 0;

//====================================================

//var c = (a>b)? a : b;

//====================================================
// var c = (a>b)? 
//     function(){

//     console.log("A es mayor que B");
//     return a;

//     }(): 
//     function(){

//     console.log("B es mayor que A");
//     return b;

//     }();

//====================================================
//Esta declaracion agarra siempre la primera variable
var c = a || b;

//====================================================

// if(a>b){
//     c=a;
// }else{
//     c=b;
// }

//console.log(c);


function getNombre(nombre){
    var nomb = nombre || null ||"<sin nombre>";
    console.log(nomb);
}

// getNombre();


// 45
//------------------------------------------------------------------ 

//var mes = 40;
//var mes = undefined;

switch(mes){
    case (10 > 5)? 40:1:
        console.log("Enero");
        break;
    case undefined:
        console.log("Febrero");
        break;
    case 3:
        console.log("Marzo");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Mayo");
        break;
    deafault: 
        console.log("Cualquier otro mes...");
}

// 46
//------------------------------------------------------------------ 

var objetoJS = {
    nombre:"Akin",
    apellido:"Ramirez",
    edad:27,
    imprimir:function(){
        console.log(this.nombre + " " + this.apellido + " " + this.edad);
    }
}
//Objeto literal
// console.log(objetoJS);

var jsonString = JSON.stringify(objetoJS);
// console.log(jsonString);

var objetoDesdeJson = JSON.parse(jsonString);
// console.log(objetoDesdeJson);
// console.log(objetoDesdeJson.nombre);
// console.log(objetoDesdeJson.apellido);
// console.log(objetoDesdeJson.edad);
//console.log(objetoDesdeJson.imprimir()); //Con la conversion no se trasladan las funciones.

