//EXTENSION DE CLASE
class Persona {
    constructor (nombre, edad){
        this.nombre = nombre
        this.edad = edad
    }

    saludar(){
        console.log("Mi nombre es "+ this.nombre + ". Tengo "+ this.edad+ " años.")
    }
}

class Programador extends Persona {
    constructor(nombre, edad, añosExperiencia){
        super(nombre, edad);
        this.añosExperiencia = añosExperiencia
    }

    codear (){
        console.log("Soy "+ this.nombre+ ", codeo hace hace "+ this.añosExperiencia, "años.")
    }
}
var matias = new Persona ("Matías", 41);
var programador = new Programador("Maria", 40, 5);
matias.saludar();
programador.codear();
programador.saludar();