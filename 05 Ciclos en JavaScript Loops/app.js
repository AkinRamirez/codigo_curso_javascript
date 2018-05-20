// 47
//------------------------------------------------------------------ 

var i  = 0;

// while(i<=10){
//     i++;
//     if(i===5){
//         //break; //Sale
//         continue; //Continua evaluando el ciclo, descartando el console.log del 5.
//     }
//     console.log(i);    
// }

// do{
//     i++;
//     if(i===5){
//         continue;
//     }
//     console.log(i); 
//     //break;

// }while(i<10);


// 48
//------------------------------------------------------------------ 

// for(var i=0;i<=10;i++){

//     // if(i===5){
//     //     //continue;
//     //     break;
//     // }
//     console.log(i);
// }

var Persona = function(){
    this.nombre = "Juan";
    this.apellido = "Pineda";
    this.edad = 18;
}

var juan = new Persona();
Persona.prototype.direccion = "Tegucigalpa";


//Reflejo = Es la habilidad de los objetos de conocerce a si mismo.
for(prop in juan){
    if(!juan.hasOwnProperty(prop)){
        continue;
    }
    // console.log(prop,":",juan[prop]);
}

for(num in [1,2,3,4,5,6,7,8,9,10]){
    // console.log(num);
}

[1,2,3,4,true,6,7,false,9,"akin"].forEach(function(val){
    // console.log(val);
});


var arr = [1,2,3,4,true,6,7,false,9,"akin"];

arr.forEach(function(e){
    // console.log(e);
});

// 49
//------------------------------------------------------------------ 

// for_principal: //Rotulaciones de ciclos
// for(var i=0 ; i<=5; i++){
//     console.log("i",i);
//     for_secundario:
//     for(var j=0; j<=5; j++){
//         console.log("j",j);
//         //continue for_principal;
//         for(var x=0; x<=5; x++){
//             console.log("x",x);
//             break for_secundario;
//         }
//     }
// }


// 50
//------------------------------------------------------------------ 

// setTimeout(function(){
//     console.log("Paso un segundo");
// },1000);

// var segundos = 0;

// var intervalo = setInterval(function(){
//     segundos++;
//     console.log("segundo",segundos);
//     if(segundos===3){
//         clearInterval(intervalo);
//     }    
// },1000);

var juan = {
    nombre:"Juan",
    apellido:"Banegas",
    edad:30,
    imprimir:function(){
        var self = this;
        setTimeout(function(){
            console.log(self.nombre,self.edad);
        },1000);
    }
}

//juan.imprimir();
