//TODO: MAP
//TODO: INMUTABLE, porque no genera efectos secundarios al array
//TODO: Sirve para crear un nuevo array a partir de uno existente
//Se recomienda siempre trabajar con referencia en valor

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


//El metodo map es una referencia en valor [...people].map, porque no genera efectos de lado, a menos que cambiemos people o array,
//ahi si generara efecto de lado, sin embargo el cambio se ve fuera del scope del map, ya que este no es ref en memoria,
//de forma similar si la lista es un JSON y modificamos el sus elementos con ref en memoria, entonces estos cambios se veran 
//reflejados en cada iteracion, porque estos tiene su propia referencia en memoria y la referencia en valor del forEach es 
//la lista no a sus elementos.
const newPeople = people.map((e, index, array) => {
    //array = people, por eso es una referencia en memoria

    //ejemplo de ref en memoria de array
    array = ["1"]

    //ejemplo de ref en memoria de un elemento del array
    array[0] = { nombre: 'cambio', edad: "100" }

    //ejemplo de ref en memoria de el elemento
    e.nombre = "nuevo valor"

    //SE RECOMENDIA TRABAJAR TODO CON referencia en valor
    const nombre = { ...e }

    return e
})
