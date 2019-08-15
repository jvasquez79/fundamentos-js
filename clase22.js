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

var javier = new Persona('Javier', 'Vásquez', 1.71)
var arlette = new Persona('Arlete', 'Gutiérrez', 1.55)
//console.log(javier)
javier.saludar()
arlette.saludar()

console.log(javier.soyAlto())
console.log(arlette.soyAlto())
