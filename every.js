//TODO: EVERY
//TODO: INMUTABLE
//TODO: Se usar para saber si TODOS los elemento cumplen la condicion
//retornando true o false

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

//TODOS los elemento del array cumple esto?
const verify = people.every(e => e.edad > 20)
console.log(verify)