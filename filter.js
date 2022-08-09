//TODO: FILTER
//TODO: INMUTABLE, porque no genera efectos secundarios al array
//TODO: Sirve para crear un nuevo array a partir de todos los lementos que cumplan la condicion

const people = [
    {
        nombre: "MARIO",
        edad: "26"
    },
    {
        nombre: "CLARA",
        edad: "24"
    },
    {
        nombre: "DIEGO",
        edad: "23"
    }
]


//El metodo filter es una referencia en valor [...people].filter, porque no genera efectos de lado
//Suele trabajarse con el metodo includes
//No se recomienda hacer logica en su scope, para ello esta forEach no map, xq dije solo logica no retorno
const newPeople = people.filter((e, index, array) => {
    // console.log(e)
    // console.log(index)
    // console.log(array)
    return e.nombre.includes("A")
})

console.log(newPeople)