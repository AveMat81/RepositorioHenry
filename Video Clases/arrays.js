// Arrays

// var listaDeCompras = []
// listaDeCompras [3] = "Tomate"
// listaDeCompras [1] = "Lechuga"

// console.log(listaDeCompras.length)
// listaDeCompras[1];
// var elementoDelArray = listaDeCompras[1]
// console.log(elementoDelArray)

// Metodos de los arrays

// var colores = ["amarillo", "azul"]
// colores.push("rojo") 
// colores.unshift("vrede")
// colores.pop()
// colores.shift()
// console.log(colores)

// metodos includes y every

// var pintores = ["Picasso", "Velazquez", "Van Gogh", "Dali"]
// var incluyeDali = pintores.includes("Dali") //treu
// var incluyeDali = pintores.includes("Monet") //false
// console.log(incluyeDali)

// var numeros = [1, 6, 8, 9]
// var cumpleCondicion = numeros.every((num) =>{
//     return num > 5
// }) 
// console.log(cumpleCondicion) //false

// var numeros = [10, 6, 8, 9]
// var cumpleCondicion = numeros.every((num) =>{
//     return num > 5
// }) 
// console.log(cumpleCondicion) //true

// // SPLIT
// var palabra = 'Henri';
// var palabraSeparada = palabra.split('');

// console.log(palabraSeparada);

// // JOIN
// var palabraArreglada = palabraSeparada.join('');

// console.log(palabraArreglada);

// // FOREACH
// var numeros = [ 1, 2, 3, 4 ];
// var numerosII = []
// numeros.forEach( (num) => { 
//    numerosII.push(num + 10);
//    numeros.push(num + 10);
// } )
// console.log(numerosII)
// console.log(numeros)

// MAP
var numeros = [ 1, 2, 3, 4 ];
// var masUno = numeros.map( (num) => {
//      return num + 1 
//     } );

// console.log(masUno);
var masUno = []
for (var i = 0; i < numeros.length; i++){
    masUno.push(numeros[i] + 10)
}
console.log(masUno);