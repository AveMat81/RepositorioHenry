// var deportes = {
//     conBalon: ["Football", "Basketball", "rugby"], 
//     sinBalon: ["Boxeo", "Surf", "Trekking"],
// };
// // console.log(deportes);
// console.log(deportes.conBalon);
// // console.log(deportes.conBalon[0]);

// var estudiante = { 
//                   Nombre: "Matías", 
//                   Edad: 41, 
//                   Estudios: {
//                               esProgramdor: [true, false]} 
//                   };

// estudiante["nuevoObjeto"] = {};
// // estudiante.nuevoArray = [{auto: "1", moto:["yamaha","honda"]}];
// // estudiante.nuevoArray[0].moto[3]="nueva moto";
// // console.log(estudiante.nuevoArray[0].moto[3]);
// // console.log(estudiante.nuevoArray[0].auto);
// // // console.log(estudiante.Estudios.esProgramdor[0]);
// // console.log(estudiante.nuevoArray);
// console.log(estudiante.nuevoObjeto)

// // var array = [];
// // for(let i = 0; i < estudiante.Estudios.esProgramdor.length; i++){
// //     array.push(estudiante.Estudios.esProgramdor[i])
// // }

// // console.log(array);

// // ASIGNAR
// var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };
// persona.nombre = 'Martín';
// console.log(persona.nombre);

// //CREAR
// var autos = {};
// autos.marcas = ['Ford', 'Audi', 'Ferrari'];
// console.log(autos);

// //BORRAR
// delete autos.marcas;
// console.log(autos);

//GUARDAR UNA FUNCION EN UN OBJETO

// var misFunciones = {
//     saludar: function (){
//         console.log("Hola");
//     },
// };
// misFunciones.saludar();

// // BRACKET NOTATION
// var atuendos = {manos: ["Guantes", "Anillos"], pies: [{calzado: "Zapatos"}, "Soquetes"]};
// // console.log(atuendos);

// atuendos["piernas"] = ["Pantalones", "Bermudas"]
// // console.log(atuendos);
// console.log(atuendos['pies'][0]['calzado']);

// var comidas = {};
// var diferenciaDeNotaciones = function(propUno, propDos){
//     comidas[propUno] = ['Frutas', 'Vegetales'];
//     comidas[propDos] = ['Hamburguesas', 'Papas fritas'];
// };

// diferenciaDeNotaciones('Saludable', 'noSaludable')
// console.log(comidas)

//**NOTA**//
//Para utilizar una variable externa (el paso por parametro) y guardarla como propiedad en un objeto. Es importante que en esos casos recordemos utilizar Bracket-Notation sin comillas para que funcione correctamente.

// // HAS OWN PROPERTY
// //El método hasOwnProperty() nos permitirá especificar un nombre, y verificar si este existe como una propiedad dentro de un objeto. En cada caso devolverá true o false.

// var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
// var tienePropiedad = libro.hasOwnProperty('nombre');
// console.log(tienePropiedad);//False

// var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
// var tienePropiedad = libro.hasOwnProperty('autor');
// console.log(tienePropiedad);//True

// // KEYS
// //El método Object.keys() devuelve todas las propiedades de un objeto guardadas en orden dentro de un arreglo.
// var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
// var todasLasPropiedades = Object.keys(libro);

// console.log(todasLasPropiedades);//[ 'autor', 'genero', 'año' ]

// //FOR-IN
// // El bucle For-In nos permite iterar sobre un objeto utilizando dos variables pivot. Una representa el objeto que recorremos, y la otra la propiedad en la que se está realizando la iteración. Utilizando ambos valores podremos acceder al valor de cada propiedad del objeto.

// var mundo = {continentes: 7, paises: 195, oceanos: 5};
// for(let i in mundo){
//     console.log("Esta es la propiedad " + i)
//     console.log("Este es el valor " + mundo[i])
// }
// Esta es la propiedad continentes
// Este es el valor 7
// Esta es la propiedad paises
// Este es el valor 195
// Esta es la propiedad oceanos
// Este es el valor 5

// //THIS
// var mascota = {
//     animal: 'gato',
//     raza: 'Ovejero Alemán',
//     amistoso: true,
//     dueño: 'María López',
//     info: function(){
//        console.log('Mi perro es un  ' + this.raza)//Este this. hece referenecia a la propiedad raza del objeto en el q esta (objeto mascota)
//     },
//  };
// mascota.info();

 // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
   // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
   // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
   // Luego debes restar del precio total del producto ese valor de descuento.
   // Retornar el precio final.
   // Ejemplo:
   // Precio ---> 10
   // PorcentajeDeDescuento ---> 0.2
   // Precio final ---> 8
   // Tu código:
   
//    var objetoProducto = { precio: 10,
//                           porcentajeDeDescuento: 0.2,
//                         //   calcularPrecioDescuento: function(){
//                         //    return this.precio * this.porcentajeDeDescuento
//                         //   }
//    }
   
//    objetoProducto["calcularPrecioDescuento"] = function(){
//       return this.precio * this.porcentajeDeDescuento
//    };
// var precioFinal = objetoProducto.precio - objetoProducto.calcularPrecioDescuento();
// console.log(objetoProducto.calcularPrecioDescuento());   

var objeto = {continentes: 7, paises: 195};
   var arrayGeneral = [];
   
   var j = 0
for(let i in objeto){
   var array = []
   array.push(i)
    array.push(objeto[i])
     arrayGeneral[j]=array
     j = j+1
     console.log(arrayGeneral)
   }
   // console.log(arrayGeneral)

   // array = ["a", 1]
   // arrayB = [array]
   // console.log(arrayB)