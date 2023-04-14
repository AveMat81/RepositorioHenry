// // FUNCIÓN CONSTRUCTORA
// function Auto(puertas, marca, color, año, ruedas){
//     this.puertas = puertas
//     this.marca = marca
//     this.color = color
//     this.año = año
//     this.ruedas = ruedas

//     this.informacion = function(){
//         console.log("Mi auto es un " + this.marca + " de color " + this.color)
//     }
// }

// var miPrimerAuto = new Auto(2, "Ferrari", "Rojo", 2018, 4);

// // console.log(miPrimerAuto);
// // console.log(miPrimerAuto.marca);
// miPrimerAuto.informacion()


// EXPRESIÓN DE CLASE
class Auto {
    constructor(puertas, marca, color, año, ruedas){
    this.puertas = puertas
    this.marca = marca
    this.color = color
    this.año = año
    this.ruedas = ruedas  
    }

    informacion = function(){
        console.log("Mi auto es un " + this.marca + " de color " + this.color);
    }
};

var miSegundoAuto = new Auto(4, "Fiat", "Blanco", 2015, 4);

console.log(miSegundoAutos);
console.log(miSegundoAutos.marca);
miSegundoAuto.informacion();