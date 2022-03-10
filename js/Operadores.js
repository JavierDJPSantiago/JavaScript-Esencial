"use strict"

//Operadores relacionales

//Igual que ==     Validando una relación
//No es igual o es diferente  !=




//Operadores logicos
//regresa boolean

var dataA = 20;
var dataB = 10;

//operador Y o AND - && //deben cumplirse todas las condiciones
var and = (dataA >10 && dataB>9); 
 
//Operador o u or - ||  //mientras se cumpla una condición dara true //alt + 124
var or = (dataA >10 || dataB);

//Operador de negación o not - ! //no debe cumplirse esta condición
var not = !(dataA >10); 



//Operadores de asignación
var dato = 10;

//asignar simple
var igual = dato;

//sumar y asignar
var masigual = 10;
masigual += dato;

//restar y asignar
var menorigual = 10;
menorigual -= dato;

//multiplicar y asignar
var porigual = 10;
porigual *= dato;

//dividir y asignar
var dividir = 10;
dividir /= dato;





//Operador negativo

var datosA = 10;       //10
var datosB = -datosA;  //-10




//concatenación

//numeros como texto
var concatenanumero = "2" + "8"; //junta los string y muestra 28 pero no es un número

//texto y números
var textnum = 10;
var textonumero = textnum + "8"; // muestra 108, 10 numero y 8 como texto





//Operador ternario: para una sola desición

var DA = 10;
var DB = 20;

//           QUE SE CUMPLE  : no se cumple   
              //Condición ? TRUE : FALSE
var resultado = DA > DB ? "Si es mayor" : "No es mayor";




//Operador de tipo de dato
//typeof variable

var tipoDeDato = 10;
console.log (typeof tipoDeDato); //tipo de dato number

var personaDatos = {
    edad: 34,
    deporte : "correr"
}

console.log(typeof personaDatos); //object
console.log(typeof personaDatos.edad); // number
console.log(typeof personaDatos.deporte); //string




//Ejercicio

var a, b, c;
a = b = c =5;
a += b *= c /= 5;

/*
Resultado:
a = 10
b = 5
c = 1
*/
