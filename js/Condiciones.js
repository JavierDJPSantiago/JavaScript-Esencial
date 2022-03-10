// condición if: flujo del programa por desiciones 
//else if no cumplirse la anterior condición
//else de no cumplirse nada de lo anterior

var datoA = 110;
var datoB = 20;
var datoC = 5;


var resultado = "Sin datos"; //cambiara su contenido dependiendo del if

if (datoA > datoB){
    resultado = "la condición se cumplió"

} else if (datoA == datoB){
    resultado = "segunda evaluación verdadera"

} else {
    resultado = "la condición no se cumplio"
}


console.log(resultado); //valor por if


// condición anidada

if (datoA > datoB){
    resultado = "la condición se cumplió"
    if(datoC < datoB){
        resultado = "Evaluación anidada verdadera"
    } else{
        resultado = "Evaluación anidad no verdadera"
    }
 
} else {
    resultado = "la condición no se cumplio"
}





//Estructura switch: 

var edad = 10;
var resultados = "";

switch (edad){
    case 10:
        resultados = "la edad es de 10"
    break;

    case 20:
        resultados = "la edad es 20"
    break;

    default:
        resultados = "ninguno coincide"
    break;
}

var edad = "10";
var resultados = "";

switch (edad){
    case "10":
        resultados = "la edad es de 10"
    break;

    case "20":
        resultados = "la edad es 20"
    break;
    
    default:
        resultados = "ninguno coincide"
    break;
}



let a = 10;
let b = 20;

console.log (a <= b);