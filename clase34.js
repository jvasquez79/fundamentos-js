
const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }

function obtenerPersonaje(id) {
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

        $
            .get(url, opts, function(data) {
                resolve(data)
            })
            .fail((err) => { 
                console.log(err)
                reject(id)
            })
    })

}

function onError(id) {
    console.log(`Ocurrió un error al obtener el personaje ${id}`)
}

var ids = [1, 2, 3, 4, 5, 6, 7]

var promesas = ids.map(id => obtenerPersonaje(id))

console.log(promesas)

Promise
    .all(promesas)
    .then(personajes => console.log(personajes))
    .catch(onError)
    