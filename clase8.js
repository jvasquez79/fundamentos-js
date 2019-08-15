//Parámetros

var javier = {
    nombre: 'Javier',
    apellido: 'Vásquez',
    edad: 40,
    //ejemplo de método
    imprimirDatos: function() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años`)
    }
}

function imprimirNombreEnMayusculas({ nombre }) {
    console.log(nombre.toUpperCase())
}

function imprimirNombreYEdad(persona) {
    var { nombre } = persona, { edad } = persona
    console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`)
}

function cumpleanos(persona) {
    return {
        ...persona,
        edad: persona.edad++
    }
    
}

imprimirNombreYEdad(javier)
imprimirNombreYEdad({ nombre: 'Pepito', edad: 30})

cumpleanos(javier)
