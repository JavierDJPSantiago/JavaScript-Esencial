//Funciones o metodos: acciones relacionadas a palabras claves

                            //todas las funciones regresan algo return
//function nombreFuncion (){ return}
function saludar (){
    var saludo = "Hola mundo";
    console.log(saludo)
    return saludo;
}
saludar();  //llamando a la función, nombre de función con parentesis



//parametros: elementos con los que trabaja la función, pueden ser mas de uno
function saludar (nombre, edad){
   console.log("Hola: " , nombre);
   console.log("Edad ", edad);
   var resultado = nombre + "tiene" + edad + "años";
   return resultado;
}

var mensaje = saludar("Javier", 25);  //Hola: Javier, Edad: 25// variable para almacenar el valor que regresa la función
console.log(mensaje);




//inicialización de un paramentro

function contar (cantidad=20){            //darle un valor por default al parametro
    console.log("Total: " , cantidad);
}

contar();    //sin darle valor al parametro que solicita, el parametro tomara el valor de 20
contar(100); //dando valor al parametro, tomara el valor de 100





//Declarados en la función
//Parametros de tipo Rest                   //...NombreDeparametro: permite agregar parametros no especificados en la 
                                            //función
function cocinar (ingrediente1, ingrediente2, ...ParametroTipoRest){
    console.log("ingrediente1" , ingrediente1);
    console.log("ingrediente2" , ingrediente2);
}
cocinar ("Pollo" , "Tomate");

//Colocar mas parametros de los establecidos en la función, la consola solo mostrara los parametros de la función
cocinar ("Pollo" , "Tomate","Arroz", "Frijoles", "Pescado", "Chile"); //Ingrediente1 Pollo
                                                                      //Ingrediente2 Tomate
                                                                      //["Arroz", "Frijoles", "Pescado", "Chile"]
                                                        
//
function cocinar (...ParametroTipoRest){
    console.log("ParametroTipoRest: ", ParametroTipoRest); 
}
cocinar ("Pollo" , "Tomate","Arroz", "Frijoles", "Pescado", "Chile");
//["Pollo" , "Tomate","Arroz", "Frijoles", "Pescado", "Chile"]





//Declarados en la invocación
//Parametros SPREAD

function cocinar (ingredientes1, ingredientes2, ingredientes2, ...otros){

}

var ingredientesBase = ["Pollo", "Tomate"];

cocinar(...ingredientesBase, "Arroz","Pezcado", "Chile");
//ingredientes1:"Pollo", ingredientes2:"Tomate", ingredientes3:"Arroz", Otros:["Pezcado","Chile"]






//Funciones anonimas: 

/*(
    function(){
        var mensaje = "Hola de nuevo"
        console.log(mensaje);
    }
)()*/

//dentro de una variable, la función no tiene nombre
var saludar = function (nombre){
    var mensaje = "Hola " + nombre;
    return mensaje;
}




//callbacks: usar funciones como parametros
function calcular (datoA, datoB, sumarCB, restarCB){
    var suma = datoA + datoB
    var restar = datoA - datoB;
    
    sumarCB(suma);
    restarCB(restar);
}

//invocación
calcular(2, 3, function(resultado){
    console.log("Suma", resultado)
}, function(resultado){
    console.log("Resta", resultado)
})

// calcular (s1,d2, function,function)





//Función de tipo flechas
//  nombre    parametro =>Return/acción de la función
var saludar = nombre => "Hola" + nombre;
console.log(saludar("Susana"))

var sumar = cantidad => cantidad + 10
console.log (sumar (10));

//mas de un parametro en flecha
var calcular = (datoA, datoB) => datoA + datoB
console.log (calcular (10, 15));


//mas de un parametro y mas de una acción
var generar = (datoA, datoB) =>{
    var datoC = 5;
    return datoA + datoB + datoC;
} 
console.log (generar(10, 15));


//Sin parametros
var validar = () => {
    return "Validación correcta";
}
console.log(validar());




//Uso de this: hacer referencia al mismo objeto con el que trabajamos
const boton = documento.querySelector (".Boton");

boton.addEventListener("click", function (){
    console.log(this);  //acceso al contenido del objeto con el que se trabaja
})

boton.addEventListener("click", () => {
    console.log(this); // acceso a las propiedades y metodos del objeto
})
