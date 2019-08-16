class Persona {
    constructor(nombre, apellido, nacimiento, estatura) {
        this.nombre = nombre
        this.apellido = apellido
        this.nacimiento = nacimiento
        this.estatura = estatura
    }
    saludar() {
        console.log(`Hola! Mi nombre es ${this.nombre} ${this.apellido}, nací en ${this.nacimiento} y mido ${this.estatura}m`)
    }
}

var javier = new Persona('Javier', 'Vásquez', 1979, 1.71)
javier.saludar()

probarDescomposicion(javier)

probarArgumentos(function(miArg1, miArg2) {
    //console.log(`Argumento 1: ${miArg1}, Argumento 2: ${miArg2}`)
    console.log(arguments)
})

probarArgumentos(nombrada)

function probarArgumentos(fn) {
    console.log(arguments)
    fn('hola', 1, true)
}

function nombrada() {
    console.log(arguments)
}

function probarDescomposicion(persona) {
    //var { nombre1, apellido1, estatura1 } = persona //no funciona! necesita los nombres exactos de los atributos
    var { nombre, apellido, estatura } = persona
    console.log(`nombre enviado: ${nombre}, apellido: ${apellido}, nacimiento: ${estatura}`)
}
