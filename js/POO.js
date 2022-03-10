//Poo
//metodos y propiedades
//herencias y metodos

let marca;
let modelo;
let pulgada;

class Producto{
    constructor (numSerie){
        this.numSerie = numSerie;
        this.tiempoGarantia = 100;
    }

    //metodo static no necesita crear un objeto para usarse: Producto.infoTienda
    static get infoTienda(){
        console.log("Producto de la tienda");
    
    }
    set garantia (value){
        this.tiempoGarantia -= value;
    }

    get garantia(){
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