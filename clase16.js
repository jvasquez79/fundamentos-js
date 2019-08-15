var signo = prompt('¿Cuál es tu signo?')

switch (signo) {
    case 'aries':
        console.log('Mu de Aries')
        break
    case 'tauro':
        console.log('Aldebarán de Tauro')
        break
    case 'leo':
        console.log('Aioria de Leo')
        break
    case 'sagitario':
        console.log('Aioros de Sagitario')
        break
    case 'geminis':
    case 'géminis':
        console.log('Aioros de Géminis')
        break
    default:
        console.log('No es un signo zodiacal válido')
        break
}
