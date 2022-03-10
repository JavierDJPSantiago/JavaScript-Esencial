//Entender DOM y BOM
//mecanismos para que js se comunique con html
//BOM contenedor, DOM: se aloja en el interior
//usar como objetos componentes de html y manipularlos con JS

//DOM: documment object model
//manipulación del contenido de la pagina
//document
var boton = document.getElementById(".boton")
boton.addEventListener("click", function(){

})


//BOM: browser object model
//usando el navegador
//window 
boton.addEventListener("click", function(){
    console.log(window.location.href);      //regresa la ubicación donde se ejecuta el archivo
    window.location.href = "http://github.com"//redireccionamiento de la pagina
});









//propiedades y metodos del DOM

//getElementsByTagNam: permite obtener los elementos por su etiqueta (p, div, form, h1)
var todosLosParrafos = document.getElementsByTagName("p")


//getElementsByClassName: permite obtener los elementos por su nombre de clase
//captura todos los elementos de la clase y lo guarda en un arreglo
var todosLosParrafos = document.getElementsByClassName("principal");

//variante: eligiendo al elemento 0, y al contenido del texto con textContent
var todosLosParrafos = document.getElementsByClassName("principal"[0].textContent);


//cambiando estilos en js
var boton = document.getElementsByClassName("boton");
boton.style.backgroundColor = "green";
boton.style.color = "white";
boton.style.width = "200px";


//creando elemento: foto
//creando elemento tipo img
var foto = document.createElement("img");
foto.src = "foto.jpg";//dirección de la foto
foto.name = "foto1";
foto.width = 400;
document.body.appendChild(foto);//agregando al body del HTML






//Propiedades del metodo BOM
var boton = document.getElementsByClassName("boton");
var principal = document.getElementsByClassName("principal"[0]);

//conocer el alto y el ancho
//se puede trabajar sin el objeto window pero no es recomendable
console.log("innerHeight", window.innerHeight);
console.log("innerWidth", window.innerWidth);

//accediendo a alguno de los elementos del navegador
//alamacenando información en el contenedor
localStorage.setItem ("contenido", "Código y café es una gran combinación")

//recuperando el contenido guardado
var contenido = localStorage.getItem("contenido");


boton.addEventListener("click", function(){
    
    var contenido = localStorage.getItem("contenido");
    principal.innerHTML = contenido;

    //avanzar en el historial
    window.history.forward();
    
    //regresar en el historial
    window.history.forward();
    
    //ir a en el historial
    window.history.forward(3);


});