//iterando arreglos dentro de un arreglo

var platillos = ["ceviche", "tacos", "pasta"];

//for in
//lo ejecutara tantas veces mida platillos
//let i in platillos: cuantos i tiene platillos: refiere a cuantas veces se repetira el ciclo, en este caso es las mismas veces que mida el arreglo platillo
for (let i in platillos){
    console.log(platillos[i]);

}
//regresa los elementos del arreglo en lista



//arreglo forEach();
var platillos = ["ceviche", "tacos", "pasta"];

//forEach: para cada elemento
platillos.forEach( platillo => console.log(platillo));//ceviche tacos pasta

//variante para obtener la posicion de lo elementos
//cada elemento de platillo(platillo,indice)
//primero va el dato y despues el indice
//dentro de la función => no importa el orden en como uses los argumentos 
platillos.forEach( (platillo, index) => console.log(index ,platillo));//






//buscar en arreglo: iterar dentro de un arreglo sin necesidad de usar ciclos
var platillos = ["ceviche", "tacos", "pasta"];

//en platillos busca platillo y que platillo sea igual a "pasta", si lo encuentra devuelve pasta, si no lo encuentra devuelve undefined
var platilloElegido = platillos.find(platillo =>
    platillo == "pasta");


//buscar en arreglo de objetos
var menu = [
    {nombre: "Tacos", precio: 20, pais: "Perú"}    
]

var platilloElegido = meunu.find(platillo =>
    platillo.nombre == "pasta");
    //.nombre por que accedemos a nombre dentro de menu






//busqueda de indices en elementos

var platillos = ["ceviche", "tacos", "pasta"];

//findIndex: regresa el indice donde esta el elemento
var numPlatillo = platillos.findIndex(platillo=>
    platillo == "Tacos" );

var menu = [
    {
        nombre: "ceviche",
        precio: 20,
        pais: "Perú"
    },
    {
        nombre: "Tacos",
        precio: 18,
        pais: "México"
    }
]

//buscado en arreglo de objetos
//validación finIndex sencible a mayusculas y minusculas
var numPlatillo = menu.findIndex(platillo=>
    platillo.nombre == "Tacos" );//regresa la posición 2








//filtrar arreglos

var menu = [
    {
        nombre: "ceviche",
        precio: 20,
        pais: "Perú"
    },
    {
        nombre: "Tacos",
        precio: 18,
        pais: "México"
    }
];

var resultado = null;

//solo regresa la primera incidencia que encuentre
resultado = menu.find(platillo =>
    platillo.pais == "México");



//filter: devulve todas las incidencias
resultado = menu.filter(platillo =>
    platillo.pais == "México");








//validación de elementos de un arreglo

var menu = [
    {
        nombre: "ceviche",
        precio: 20,
        pais: "Perú"
    },
    {
        nombre: "Tacos",
        precio: 18,
        pais: "México"
    }
];

var resultado = null;

//some: recibe una función como callback
//solo busca que uno cumpla la condición
//regresa un boolean
//pregunta si hay platillos menores de 20
resultado = menu.some(platillo => 
    platillo.precio <20);

console.log("platillos de 20 pesos", resultado);


//every: valida que todos los elementos de este arreglo cumplan con la condición
//pregunta si todos los platillos valen menos de 20
//regresa un boolean
resultado = menu.some(platillo => 
    platillo.precio <20);
