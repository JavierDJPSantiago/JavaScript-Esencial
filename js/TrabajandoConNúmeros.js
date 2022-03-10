//propiedades numericas
console.log ("MAX_VALUE", Number.MAX_VALUE); //número mas grande que maneja JS

console.log ("MIN_VALUE", Number.MIN_VALUE); //número mas pequeño que maneja JS

console.log ("NEGATIVE_INFINITY", Number.NEGATIVE_INFINITY); //valor negativo infinito

console.log ("POSITIVE_INFINITY", Number.POSITIVE_INFINITY); //valor positivo infinito

console.log("NaN" , Number.NaN); //Dar a conocer si el valor que manejamos es un número


//metodos númericos
var numero = "10.30";

//number
console.log("Number" , typeof numero, typeof Number(numero));//convertir a un número


console.log("parseInt", parseInt(numero));//convertir una cadena de texto en un numero entero, se pierden los deciamles

console.log("parseFloat", parseFloat(numero));//convertir a numeros con sus decimales

console.log("isNaN", isNaN(numero));//conocer si es un número, en este caso da false

console.log("isInteger" , Number.isInteger(numero)); //Number.isInteger: preguntar si un número es un entero



//Metodos númericos de instancias
var numero1 = 2.5;

console.log("toExponential: ", numero1.toExponential(4));//regresa notación exponencial del número

console.log("toFixed: ", numero1.toFixed(4));//regresa el número entero acorde al valor que demos= 2.5000
                                             //si das un valor de 0 rendondea al número

console.log("toPrecision: ", numero1.toPrecision(6));//da un número mas preciso, suma 0 hasta que den 6 números

console.log("toString: ", numero1.toString());//convierte el número en cadena de texto

 