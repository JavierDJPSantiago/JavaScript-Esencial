//Arreglos

var platillos = ["ceviche", "pastas", "tacos"];

var bebidas = new Array("Jamaica", "Naranja", "Limon");

console.log(typeof(platillos));//me dice que es un objeto

//Indica si es un arreglo o no
console.log(Array.isArray(platillos));//envia true o false





//como medir y acceder a un arreglo
var comidas = ["ceviche", "pastas", "tacos"];

//length: numero de elementos en el arreglo
console.log ("hay" + comidas.length + "en el menu");

//recuperar un elemento por posición: se mide desde 0
var platillo = comidas[0];//regresa ceviche

//variante: menos 1 para que de 3 y me muestre la posición 3 contando desde 0
var platillo = comidas[comidas.length - 1]




//Función de arreglos multidimensionales: arreglos dentro de arreglos
var platillos = ["ceviche", "pastas", "tacos"];
var paises = ["Perú", "México", "Italia"];

//arreglo multimensional
var menu = [platillos, paises];

//acceder al multiarreglo
//primer corchete: inda la posición de los arreglos en el multi arreglo [0] = platillos, [1] = paises
//Segundo corchete: posicion de lo elementos dentro del arreglo especificado
console.log( menu[0][1] );//platillos: pastas




//Operaciones basicas de arreglos
var platillos = ["ceviche", "pastas", "tacos"];

console.log(`Antes`, platillos);

//metodo push: agregar elementos al arreglo al final del arreglo
platillos.push("Mole");

//metodo pop: elimina el ultimo elmento de un arreglo
platillos.pop();

//metodo join: convierte el arreglo en cadena de texto
var mensaje = platillos.join();

console.log(`Despúes`, platillos)








//generación de arreglos con:

//split(): con una variable con un string
var mensaje = "tacos, pasta, hambre"; 
var platillos = mensaje.split(", ")

//Array.from(): con una lista de html
var platillosHTML = Array.from(document.querySelectorAll ("platillos p"))
//mapeo de contenidos           //parametro
var platillos = platillosHTML.map(platillo => platillo.textContent);//genera un arreglo con los elementos de textcontent

//Array.of: con un string
var platillos = Array.of("tacos, pasta, hambre"); 






//Ordenando un arreglo

var platillos = ["ceviche", "pastas", "tacos"];

//Sort: Ordena de manera alfabetica 
platillos.sort();

//reverse: ordena el arreglo al reves
platillos.reverse();






//Desestructuración e arreglos
var platillos = ["ceviche", "pastas", "tacos"];

/*
var platillo1 = platillos[0];
var platillo2 = platillos[1];
var platillo3 = platillos[2];
console.log (platillo1, platillo2, platillo3); //ceviche, pastas, tacos
*/

var platillo1 = null;
var platillo2 = null;
var platillo3 = null;

//js toma el contenido dentro del arreglo y separa sus elementos uno a uno entre las variables sin valor definidas
[platillo1,platillo2, platillo3] = platillos; //ceviche, pastas, tacos


//variante
var [platillo1,platillo2, platillo3] = platillos; //ceviche, pastas, tacos