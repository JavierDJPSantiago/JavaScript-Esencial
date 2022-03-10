//Obtener datos con fetch
//conectarnos a dator remotos o archivos locales
//consumo de api

var boton = document.getElementsByClassName("boton");
var contenedor = document.getElementById("contenedor");
var posts = null;

boton.addEventListener("click", function(){
 
    //recibe el url donde vienen los datos
    //fetch trabajo por promesas
    fetch("http://jsonplaceloader.typicode.com/posts") //obtener los datos y al tenerlos... then
    .then(data => data.json())                         //convertir los dato en json
    .then(data => {                                    //almacenar datos en posts
        posts = data;
        mostrarDatos(posts);                           //mostrar los datos con la función
    })
});

function mostrarDatos(posts){
    posts.map((post, i =>{

        let titulo = document.createElement("h1");
        let contenido = document.createElement("p");

        titulo.innerHTML = (i + 1) + "-" + post.title;
        contenido.innerHTML = post.body;

        contenedor.appendChild(titulo);
        contenedor.appendChild(contenido);
    }))
};








//Trabajar con promesas
//con distintas fuentes
var boton = document.getElementsByClassName("boton");
var contenedor = document.getElementById("contenedor");
var contBanderas = document.getElementById("banderas");

boton.addEventListener("click", function(){
    
    getPosts()
        .then(data => data.json())
        .then(posts => {
            mostrarDatos(posts);
            return getCountries();
        })
        .then(data => data.json())
        .then( countries =>{
            mostrarBanderas(countries);
        });



});

function getPosts(){
    return fetch ("http://jsonplaceloader.typicode.com/posts");
}

function getCountries (){
    return fetch ("https://restcountries.eu/rest/v2/all");
}

function mostrarBanderas (countries) {
    contBanderas.innerHTML = "";
    countries.map ((countries, i)=>{
        let bandera = document.createElement("img");
        bandera.src = countries.flag;
        bandera.width = "20";
        bandera.height = "20";
        contBanderas.appendChild(bandera);
    })
};

function mostrarDatos(posts){
    posts.map((post, i =>{

        let titulo = document.createElement("h1");
        let contenido = document.createElement("p");

        titulo.innerHTML = (i + 1) + "-" + post.title;
        contenido.innerHTML = post.body;

        contenedor.appendChild(titulo);
        contenedor.appendChild(contenido);
    }))
};






//Manejar los errores en java
var boton = document.getElementsByClassName("boton");
var contenedor = document.getElementById("contenedor");
var contBanderas = document.getElementById("banderas");

boton.addEventListener("click", function(){
    
    getPosts()
        .then(data => data.json())
        .then(posts => {
            mostrarDatos(posts);
            return getCountries();
        })
        .then(data => data.json())
        .then( countries =>{
            mostrarBanderas(countries);
        })
        
        .catch(error =>{                       //metodo catch atrapa todos los errores que ocurren
            mensajes.classList.toggle("hide");//toggle agrega o quita el elemeno
            mensajes.innerHTML = error;
            setTimeout(()=>mensajes.classList.toggle("hide"),3000);
        })


});

function getPosts(){
    return fetch ("http://jsonplaceloader.typicode.com/posts");
}

function getCountries (){
    return fetch ("https://restcountries.eu/rest/v2/all");
}

function mostrarBanderas (countries) {
    contBanderas.innerHTML = "";
    countries.map ((countries, i)=>{
        let bandera = document.createElement("img");
        bandera.src = countries.flag;
        bandera.width = "20";
        bandera.height = "20";
        contBanderas.appendChild(bandera);
    })
};

function mostrarDatos(posts){
    posts.map((post, i =>{

        let titulo = document.createElement("h1");
        let contenido = document.createElement("p");

        titulo.innerHTML = (i + 1) + "-" + post.title;
        contenido.innerHTML = post.body;

        contenedor.appendChild(titulo);
        contenedor.appendChild(contenido);
    }))
};