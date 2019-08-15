function heredaDe(prototipoHijo, prototipoPadre)
 {
     var fn = function() {}
     fn.prototype = prototipoPadre.prototype
     prototipoHijo.prototype = new fn
     prototipoHijo.prototype.constructor = prototipoHijo
 }
function Persona(nombre, apellido, altura) {
    //console.log('Me ejecutaron')
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

//Persona.prototype.soyAlto = () => this.altura > 1.7
Persona.prototype.soyAlto = function() { 
    return this.altura > 1.7 
}

function Desarrollador(nombre, apellido) {
    this.nombre = nombre
    this.apellido = apellido
}

heredaDe(Desarrollador, Persona)

Desarrollador.prototype.saludar = function () {
    console.log(`Hola, mi nombre es ${this.nombre} y soy desarrollador`)
}

var javier = new Desarrollador('Javier', 'Vásquez', 1.71)
var arlette = new Persona('Arlete', 'Gutiérrez', 1.55)
//console.log(javier)
javier.saludar()
arlette.saludar()
