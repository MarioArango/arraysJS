//TODO: FOREACH
//TODO: INMUTABLE, porque al aplicar forach a un array, hacemos referencia en valor y no genera efecto de lado
//TODO: sirve para recorrer los elementos de un array y crear logica a partir de ellos
//se recomienda siempre que la logica sea con referencia en valor, para la lista y elementos
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
//[].forEach referencia en valor [...people].forEach, porque no genera efectos de lado, a menos que cambiemos people o array,
//ahi si generara efecto de lado, sin embargo el cambio se ve fuera del scope del forEach, ya que este no es ref en memoria,
//de forma similar si la lista es un JSON y modificamos el sus elementos con ref en memoria, entonces estos cambios se veran 
//reflejados en cada iteracion, porque estos tiene su propia referencia en memoria y la referencia en valor del forEach es 
//la lista no a sus elementos.

people.forEach((e, index, array) => {
    //array = people, por eso es una referencia en memoria

    //ejemplo de ref en memoria de array
    array = ["1"]

    //ejemplo de ref en memoria de un elemento del array
    array[0] = { nombre: 'cambio', edad: "100" }

    //ejemplo de ref en memoria de el elemento
    e.nombre = "nuevo valor"

    //SE RECOMENDIA TRABAJAR TODO CON referencia en valor
    const nombre = { ...e }
})
