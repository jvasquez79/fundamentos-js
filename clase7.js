//Desestructurando Objetos

var javier = {
    nombre: 'Javier',
    apellido: 'Vásquez',
    edad: 40
}

function imprimirNombreEnMayusculas({ nombre }) {
    console.log(nombre.toUpperCase())
}

function imprimirNombreYEdad(persona) {
    var { nombre } = persona, { edad } = persona
    console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`)
}

imprimirNombreYEdad(javier)
imprimirNombreYEdad({ nombre: 'Pepito', edad: 30})
