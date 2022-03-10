//creación de cadenas de texto
//forma tradicional
var pais = "México";

//creación mediante un objeto
var comida = new String("Ceviche");//separa las letras en un arreglo




//Medir una cadena de texto
var mensaje = "A";
console.log (mensaje.length); //tamaño de la cadena de texto





//Busqueda de texto por indices y por expresiones regulares
//si estos codigos arrojan -1, significa que no hay coincidencias
var mensaje = "Estoy aprendiendo"

var resultado;

//indexOf
//busca si se contiene esta palabra en el string, desde el inicio hacia el final: nos regresa la posicion
resultado = mensaje.indexOf("aprendiendo");//a partir de la posicion 6 se encutra esta palabra

//lastIndexOf
//busca la ultima aparición de esta palabra, sigue contando desde el incio hacia el final
resultado = mensaje.lastIndexOf("aprendiendo");

//search
//hace lo mismo que indexOf
resultado = mensaje.search("aprendiendo");


//search 
//busqueda de letras o silabas. i = inKsensitive es para buscar en mayusculas o minusculas
//busca por posición
resultado = mensaje.search(/ja/i);





//busqueda de caracteres en cadenas de texto

var mensaje = "Estoy aprendiendo"

var resultado;

//match:
//busca dentro de la cadena de texto, g es para que devuelva todas las coincidencias, i es para buscar mayusculas y minusculas
resultado = mensaje.match(/aprendiendo/gi);


//substr
resultado = mensaje.substr(6,11);//regresa el texto que se encuentra en esa posicion (6), hasta la posicion especificada(11) contando desde la primera posición

//substring
resultado = mensaje.substring(6,11); //regresa el texto que se encuentra en esa posicion (6), hasta la posicion especificada(11), pero la segunda posición no se contara desde la primera, se cotara desde el inicio

//charAt:
resultado = mensaje.charAt();//busca un caracter desde la posición 0




//BUsqueda de cadenas de texto especificas
var mensaje = "Estoy aprendiendo"

resultado = mensaje;

//startsWith: ver si comienza con tal cadena de texto
resultado = mensaje.startsWith("ja"); //regresa un boolean, es sensible a mayusculas y minusculas

//variante: buscando stromg, delvuelve posición y buscamos si apartir de esa posición empeiza con los caracteres especificados
var textoEn = mensaje.indexOf("aprendiendo")
resultado = mensaje.startsWith("es", textoEn);


//endsWith: termina con cierta cadena de texto
var textoEn = mensaje.endsWith("aprendiendo");//regresa boolean


//includes: incluye
var textoEn = mensaje.includes("aprendiendo", 6); //revisar si cotiene este string; devuelve un boolean; el segundo argumento es para indicar la posición donde esperamos que se encuentre(no es obligatorio)







//metodos de generación, reemplazo y separación
var mensaje = "Estoy aprendiendo"

resultado = mensaje;

//repeat
resultado = mensaje.repeat(4);//repetir el contenido n cantidad de veces

//replace
//remplaza el string especificado "aprendiendo", por otro contenido "En JS"
//no afecta el valor original
resultado = mensaje.replace("aprendiendo", "En JS");

//slice
//mostrar el contenido desde la posición especificada
resultado = mensaje.slice(6);

//variante
////mostrar el contenido desde la posición especificada y el maximo de caracteres que se mostraran: en este caso la longitud de la cadena de mensaje menos 6 caracteres
resultado = mensaje.slice(6, mensaje.length-6);

//se puede escribir solo un número para decir la longitud que se mostrara
resultado = mensaje.slice(6, 11);


//split
//separa cadenas de texto en un arreglo, separa las palabras por lo que especifiquemos
resultado = mensaje.split();//["Estoy", "aprendiendo"]

resultado = mensaje.split();//["Estoy", "aprendiendo"]


//trim
resultado = mensaje.trim();//elimina los espacios en blanco, antes y depues de la cadena de texto





//Metodos Transformación de texto
var mensaje = "Hola mundo";
var mensaje2 = "Javier";

//toLowerCase: cambia todo a minusculas
mensaje.toLowerCase;


//toUpperCase: convertir todo a mayusculas
mensaje.toUpperCase;


//concat: concatenar cadenas de texto, las cedenas necesitan esapcios para que no se peguen
resultado = mensaje.concat(mensaje2); 
//variante, mas de una concantenación con concat
resultado = mensaje.concat(mensaje2, "hola tu", "123"); 





//Función de Plantillas y literales: comillas inversas

var lenguaje = "JavaScript";
var lenguaje2 = "HTML";

var mensajeConComillasInversas = `Me gusta ${lenguaje} y su integración con ${lenguaje2}`;

//mensaje multilínea: respeta los enter
var mensajeMultilinea = `
Hola mundo
estoy aprendiendo
y me gusta`;


