"use strict"
//ciclos: o loops o iteradores
//2 tipos definidos (cuantas veces se ejecutara) e indefinidos (no sabemos las veces que se ejecutara) 
//Definidos FOR
// indefinidos: ciclo while y ciclo Do while 
//una repetición de un ciclo es uina iteracción


//ciclo for
var productos = 5;
//    contador      condición o evaluación  paso: incrementador o decrementador       
for (let contador = 0; contador< productos; contador ++){
    console.log ("Producto #" + contador);
    debugger;                                              //=> observar las ejecuciones en navegador: console: watch
                                                           //agrega variables
}



//ciclo while: primero evalua y luego ejecuta
var productos = 5;                                        //comienza en 5
while (productos >0){
    console.log ("producto vendido");
    productos--;                                          //decremento
    debugger;
}



//ciclo Do while: primer ejecuta y luego evalua
var productos = 5;                                        //comienza en 5
do{
    console.log ("producto vendido");
    productos--;                                          //decremento
    debugger;
}
while (productos >=1);



//controlar el ciclo
var contador = 0;
var cuenta = 0;

for (contador = 0; contador<= 20; contador++){        //primera condición
    if (contador == 5){                               //Seguna dondición
        break;                                       //ignora todos los pasos siguientes, detiene el ciclo
    }
    if (contador % 2 == 0){
        continue;                                     //deja pasar el codigo una vez pero la seguiente no
    }
    cuenta ++;
    debugger;
}
console.log (cuenta);