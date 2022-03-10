"use strict"

// Fechas

let fechas = new Date(); //Objeto fecha

console.log(fechas.getDay()); //obtiene el día de la semana 1-7

console.log(fechas.getDate()); //regresa el dia del mes 1-31

console.log(fechas.getHours());//hora en que ejecutamos este codigo

fechas.setDate(3);//Establcer el día en que quiero trabajar// regresa un valor númerico convertido en fecha
console.log(fechas);//me da una fecha del día 5




//Simbolos de JS

let simbolo1 = Symbol(); //función//dato unico en el programa
let sumbolo2 = Symbol(); //No es igual anterior => Cada simbolo tiene intrinseco un valor que lo hace unico

let ambiente = Symbol("dev"); //enviar cadena de texto
 




//Estructura de JSON => formato de intercambio de datos, usa estructura de un objeto , se envía en formato JSON o en formato texto (texto debe convertirse  a JSON)

var persona = {nombre: "Sergio", twitter: "yacafx" };

var personas = [
    {nombre: "Hugo", twitter:"dcHugo"},
    persona                                 //==>Posibilidad de agregar variables al arreglo
]                                           

//Enviar datos con JSON
var personaJSON = JSON.stringify(persona); //convierte el contenido a una cadena de texto

var nuevaPersona = JSON.parse(personaJSON); // de cadena de texto a información general