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

// // // SPLIT
// var palabra = "Henry 123";
// var palabraSeparada = palabra.split('');

// console.log(palabraSeparada);

// // JOIN
// var palabraArreglada = palabraSeparada.join('');

// console.log(palabraArreglada);

// // FOREACH
// var numeros = [ 1, 2, 3, 4 ];

// numeros.forEach( (num) => { 
//    console.log(suma = suma + num);
// } )

// for (let i = 0; i < numeros.length; i++) {
//    console.log(numeros[i]);
// }

// var numerosII = []
// numeros.forEach( (num) => { 
//    numerosII.push(num + 10);
//    numeros.push(num + 10);
// } )
// console.log(numerosII)
// console.log(numeros)

// // MAP
// var numeros = [ 1, 2, 3, 4 ];
// // var masUno = numeros.map( (num) => {
// //      return num + 1 
// //     } );

// // console.log(masUno);
// var masUno = []
// for (var i = 0; i < numeros.length; i++){
//     masUno.push(numeros[i] + 10)
// }
// console.log(masUno);

// // WHILE
// var arr = [];
// while (arr.length < 5) {
//    arr.push('Camilo');
// }
// console.log(arr);

// // FOR
// var arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//    console.log(arr[i]);
// }

// ///////////
// function encontrarLetraP(string){
//     var letra = string.split("");

//     for (let i = 0; i < letra.length; i++){
//         if(letra[i] === "p"){
//             console.log("Contiene P");
//         }
//     }
// }
// encontrarLetraP("JavaScript");
// encontrarLetraP("Henry");
// //////////

// var numeros = [ 1, 2, 3, 4 ];
// var suma = 0
// numeros.forEach( (num) => { 
   
//   return (suma = suma + num);
// } )
// console.log(suma)

// var resultadosTest = [10, 10, 10]
// var suma = 0;
// var promedio = 0;
// var j = 0;
// for(var i = 0; i < resultadosTest.length; i++){
//    suma = suma + resultadosTest[i]
//     j = j + 1;
// }
//    promedio = suma / j;
//    console.log(promedio);
//    console.log(j);
//    console.log(suma);


   // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
   // Este arreglo contiene objetos (post).
   // Cada post posee una propiedad llamada "likes".
// var objetoUsuario = {
//                       posts: [post = {like: 1 }, post = {like: 2 }]
//                     }
// console.log(objetoUsuario.posts.length)
                    // for(let i=0; i<objetoUsuario.posts.length; i++){
                    //     for(var j in post){
                    //         console.log(post[j])
                    //         console.log(j)
                    //     }
                    // }                    
// var suma = 0
//    for(let i=0; i<objetoUsuario.posts.length; i++){
//       suma = suma + objetoUsuario.posts;
//    }
// console.log(objetoUsuario.posts[0].like);
// console.log(objetoUsuario.post.length);
// console.log(objetoMuchosUsuarios[0].esPremium)
// console.log(suma)
// console.log(objetoUsuario.posts)
// for(var i in post){
//     console.log(post[i])
//     console.log(i)
// }


// String.prototype.reverse = function(){
//    var palabra = "hola"
//    var palabraSeparada = palabra.split('');
//    palabraInvertida = [];
//    for(let i=palabraSeparada.length -1; i>=0; i--){
//     palabraInvertida.push(palabra[i])
//     console.log(i)
//    }
//   console.log(palabraInvertida)
//    palabraInvertidaFinal = palabraInvertida.join('')
//    console.log(palabraInvertidaFinal);
// }
 
   // class Persona {
   //    // Crea el constructor de la clase "Persona".
   //    // Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio".
   //    // Debe tener un método llamado "detalle" que nos devuelva un objeto con las propiedades de la persona y
   //    // sus valores.
   //    constructor(nombre, apellido, edad, domicilio){
   //       this.nombre = nombre
   //       this.apellido = apellido
   //       this.edad = edad
   //       this.domicilio = domicilio
   //    }
   //    detalle = function (){
         
   //    }
   // }
   // Persona.detalle()

   // var arr = [["a", 1], ["b", 2]]
   // var obeto = Object.fromEntries(arr);
   // console.log(obeto);

// var str = "adsjfdsfsfjsdjfhacabcsbajda";
// var strSeparada = str.split('');
// var strOrdenanda = strSeparada.sort();
// console.log(strOrdenanda);




// var array = []
// var nuevoArray = []
// var j = 0

// const obj = Object.fromEntries(strOrdenanda)
// console.log(obj)
//   for (let i=0; i<strOrdenanda.length; i++){
//       array.push(array[i])
//       if(strOrdenanda[i]===strOrdenanda[i+1]){
//          array.push(strOrdenanda[i])
//       }
//       nuevoArray[j] = array
//       console.log(array)
//       array = []
//       j = j+1
//       }
// //   console.log(array)
// //   console.log(strOrdenanda)
// //   console.log(nuevoArray)
// // var numeros = [ 1, 2, 3, 4 ];
// // // var masUno = numeros.map( (num) => {
// // //      return num + 1 
// // //     } );

// // // console.log(masUno);
// // var masUno = []
// // for (var i = 0; i < numeros.length; i++){
// //     masUno.push(numeros[i] + 10)
// // }
// // console.log(masUno);

// // el array a ordenar
// var list = ['Delta', 'alpha', 'CHARLIE', 'bravo'];

// // array temporal contiene objetos con posición y valor de ordenamiento
// var mapped = list.map(function(el, i) {
//   return { index: i, value: el.toLowerCase() };
// })

// // ordenando el array mapeado que contiene los valores reducidos
// mapped.sort(function(a, b) {
//   if (a.value > b.value) {
//     return 1;
//   }
//   if (a.value < b.value) {
//     return -1;
//   }
//   return 0;
// });

// // contenedor para el orden resultante
// var result = mapped.map(function(el){
//   return list[el.index];
// });

const number = 123456789;
function reverseNumber(n) {
const convertAndReverse = n. toString(). split(""). reverse(). join("");
console.log(convertAndReverse);
}
reverseNumber(number);
reverseNumber(1101)
reverseNumber(11010111)
// esto retorna 987654321.