// 51
//------------------------------------------------------------------ 

function evento(arg){
    console.log("Me dispare");
    console.log(arg);
    console.log(arg.x,arg.y);
}

var objeto = document.getElementById("objDemo");
//console.log(objeto);

//objeto.addEventListener("keypress",evento);

// objeto.addEventListener("click",evento);

//Simulacion falsa
//objeto.click();


// 52
//------------------------------------------------------------------ 

// document.onmousedown = function(arg){
    
//     if(arg.button===2){
//         alert("Click bloqueado");
//         return;
//     }
//     console.log("No hay problema");
// }


// document.onmouseup = function(){
//     var texto = window.getSelection().toString();
//     console.log(texto);
// }

// 53
//------------------------------------------------------------------ 

function validar (){
    var nombre = document.getElementById("txtNombre");
    var apellido = document.getElementById("txtApellido");

    if(nombre.length<1){
        return false;
    }
    if(apellido.length<1){
        return false;
    }
    return true;
}

function getParamURL(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
}

// console.log(window.location.search);
// console.log(window.location.search.split("&"));
// console.log(getParamURL("txtNombre"));

// 54
//------------------------------------------------------------------ 

//alert("Hola mundo");

// var acepto = confirm("Esta seguro que desea borrar algo?");
// console.log(acepto);

// var nombre = prompt("Ingrese su nombre","nombre");
// console.log(nombre);

// 55
//------------------------------------------------------------------ 
(function(){
    "use strict";
    function getNombre(){
        "use strict";
        var nombre2 = "akin";
        return nombre2;    
    }
    
    var nombre = "akin";
    //console.log(nombre);
    
    //console.log(getNombre());

})();

