//Objetos

var javier = {
    nombre: 'Javier',
    apellido: 'Vásquez',
    edad: 40
}

function imprimirNombreEnMayusculas({ nombre }) {
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(javier)
imprimirNombreEnMayusculas({ nombre: 'Pepito'})
