//metodo try catch
//try: codigos qu se prueban
//catch si sale mal lo captura este metodo

try{
    //var array = new Array (10000000);
    //var x = y;               //y no esta definida
    decodeURIComponent("http://%ominio.com"); //uso de un metodo nativo o no nativo: el url esta mal escrito
} catch(error){
    console.log(error.message);//URI malformada//mensaje del error
    console.log(error.name); //URI error//nombre del error

}



//Generación de errores personalizados por JS
//planear errores para indicarlo al usuario

var valor1 = 120;
var valor2 = 20;

try{
    if(valor1 > valor2){
        console.log(`mensaje de validación ${valor1} si es mayor que ${valor2}`)
    }
    else{
        //throw: detona algo
        //objeto error de JS
        throw new Error(`${valor1} no es mayor que ${valor2}`)
    }
}
catch (error){
    console.log(error);
}








//depurar codigo o debuguear la aplicación
//usando el navegador en inspeccionar/source
//seleccionar una línea de codigo (numero)
//pestaña Breakpoints: marcado del inicio y termino de ejecución
//ejecutar en consola los metodos

class Producto { 
constructor(numSerie) { 
    this.numSerie = numSerie; 
    this.tiempoGarantia = 100; 
} 

static get infoTienda() { 
    console.log('Productos de la tienda Patito Inc'); 
} 
set garantia(value) { 
    this.tiempoGarantia -= value; 
} 
get garantia() { 
    return this.tiempoGarantia; 
} 
} 

class Pantalla extends Producto{
    constructor (numSerie ,marca, modelo, pulgada){
        super(this.numSerie);
        this.marca = marca;
        this.modelo = modelo;
        this.pulgada = pulgada;
    }

    encendido(){
        this.garantia = 1;
        console.log (`La pantalla ${this.marca} se ha encendido`)
    }
    volumen(){
        console.log(`El volumen se ha modificado`)
    }
    info(){
        console.log(`La pantalla ${this.marca} de modelo ${this.modelo} es de ${this.pulgada} pulgadas`)
    }

    set peso(value){
        this.kgs = value.trim();
    }
    get peso (){
        return this.kgs;
    }

}

const tvSala = new Pantalla("13579","Marca", "Oasis", 55);

const tbHabitación = new Pantalla("12345","Origin", "Artemis", 80);



//Uso de debugger, usada en el navegador, detiene la ejecución
//palabra reservada podemos usar en JavaScript para detener la ejecución del programa y analizar lo que sucede con los datos sin tener que usar "breakpoints"