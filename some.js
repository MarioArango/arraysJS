//TODO: SOME
//TODO: INMUTABLE
//TODO: Se usar para saber si al menos un elemento cumple la condicion
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

//Al menos un elemento del array cumple esto?
const verify = people.some(e => e.edad > 30)
console.log(verify)