//Eventos de mouse
//addEventListener: escucha de eventos

const boton = document.querySelector(".boton")

//click: en JS, oneclick: en HTML
boton.addEventListener("click", () => {
    console.log("El boton se ha pulsado"); 
})

//mouseover: cursor sobre el boton
boton.addEventListener("mouseover", () => {
    console.log("El mouse esta sobre el boton"); 
})

//mouseout: el mouse esta fuera del boton
boton.addEventListener("mouseout", () => {
    console.log("El boton se ha pulsado"); 
})




//Eventos del teclado

//keydown: al oprimir una tecla
//window para que la acción ocurra en toda la pagina
window.addEventListener("keydown", function (event){
    console.log("pulsando tecla"); 
})

//keypress: tecla pulsada
window.addEventListener("keypress", function (event){
    console.log("tecla pulsada"); 
})

//keyup: tecla liberada
window.addEventListener("keyup", function (event){
    console.log("Tecla liberada"); 
})


//que tecla se presiona: usamos el event
window.addEventListener("keydown", function (event){
    console.log("pulsando tecla"); 
    console.log(String.fromCharCode(event.keycode)); //keycode: detecta la tecla: solo muestra el codigo
})                                                   //String.fromCharCode: devuelve la letra; enter no devuelve nada





//Evento de carga del documento
//load: indicar que el contenido de la pagina se cargo
window.addEventListener("load", function (){
    console.log("El contenido de la ventana se ha cargado"); 
})





//Eventos multimedia: vídeo y multimedia
const botonVideo = document.querySelector(".botonVideo")

//play: iniciar vídeo
video.addEventListener("play", function (){
    console.log("El vídeo a iniciado"); 
})

//seeking: moviendo la barra de duración del vídeo
video.addEventListener("seeking", function (){
    console.log("Buscando en el vídeo", this.currentTime); //this.currentTime: obtener el tiempo donde nos ubicamos
})

//ended: video terminado
video.addEventListener("ended", function (){
    console.log("El vídeo a terminado"); 
})





//uso de temporizadores
//setInterval: cambios en ciclo
var temporizador = setInterval(function () {
    setColor ();

}, 2000); //milisegundos: 2 segundos


//setTimeout: cambios de un solo ciclo
setTimeout(function () {
    setColor ();

}, 3000); //3 segundos 


function setColor () {
    var pagina = document.body;  //afecta al body de nuestro html
    pagina.style.backgroundColor = pagina.style.backgroundColor == "blue" ? "green": "blue";
}

function stopChangeColor() {
    clearInterval (temporizador);
}
