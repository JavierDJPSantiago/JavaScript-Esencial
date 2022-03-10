//ventanas de alerta
//alert: cuadro emergente que da una notificación: solo para mensajes muy importantes
//alt + 92 : \
const video = document.querySelector(".botonVideo");

video.addEventListener(("ended", function (){
    alert("MENSAJE \n El video a terminado"); // \n  => salto de linea
}))




//ventanas de confirmación
// confirm: true o false
const video2 = document.querySelector(".botonVideo");

video2.addEventListener(("ended", function (){
    let resultado = confirm("¿Desea ver otra vez el vídeo?");//confirm almacena un boolean
    console.log(resultado);
    
    if (resultado){                        //resultado almacena un boolean, no es necesario indicar resultado == true
        video2play();
    }else {
        window.location = "http://www.google.com";
    }
}));





//ventanas para ingresar datos
const video3 = document.querySelector(".botonVideo");

video3.addEventListener(("ended", function (){
                        //mensaje de prompr                      //valor por defecto de prompt
    let email = prompt ("Escribe tu correo para ver mas vídeos", "data@info.com"); 
    //promp: al cancelar almacena un null
    

    if (email ==null || email == "") {
        console.log ("Sin datos");
    }
    else {
        console.log(email)
    }
}))