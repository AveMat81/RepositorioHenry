// //Ejemplo de crear un metodo para los Arrays.
// Array.prototype.mayoresQueTres = function(){
//     arrayModificado = [];
//     for(let i=0; i < this.length; i++){
//         if(this[i] > 3){
//             arrayModificado.push(true)
//         }else{
//             arrayModificado.push(this[i])
//         }
//     }
//     return arrayModificado;
// }

// var array = [1, 2, 3, 4, 5, 6];
// var arrayNuevo = array.mayoresQueTres();


// console.log(arrayNuevo);

//Otro ejemplo creando una clase para luego crearle un metodo.

class Latinoamerica {
    constructor(){
        this.paises = [];
    }
}

Latinoamerica.prototype.agregarPaises = function (pais){
    this.paises.push(pais);
}

var continentes = new Latinoamerica();
continentes.agregarPaises("Mexico");
console.log(continentes.paises);