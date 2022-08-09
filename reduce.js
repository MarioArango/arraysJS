//TODO: REDUCE
//TODO: INMUTABLE, hace referencia en memoria al array [...array].reduce
//TODO: Se usar cuando se quiere reducir el array a un solo "valor"
//numero, string, obj, array, segun el que se elige el valorInicial debe ser igual


const people = [
    {
        nombre: "MARIO",
        edad: 26
    },
    {
        nombre: "CLARA",
        edad: 24
    },
    {
        nombre: "DIEGO",
        edad: 23
    }
]
//valorInicial = 0
const edadTotal = people.reduce((valorInicial, e) => valorInicial + e.edad, 0)
// console.log(people);

//Recordar que el valorInicial para el siguiente ciclo es sel anterior return
//por eso el valorInicial debe ser igual a lo que retorna
const peopleTotal = people.reduce((valorInicial, e) => {
    return {
        nombre: valorInicial.nombre + " - " + e.nombre,
        edad: valorInicial.edad + " - " + e.edad
    }
}, { nombre: "", edad: 0 })
console.log(peopleTotal);

