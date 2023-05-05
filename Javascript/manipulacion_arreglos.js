let edades = [21, 21, 23, 43, 21, 43, 18, 18, 23, 23]

const resultado = edades.reduce((acumulador, edad) => {
if (!acumulador[edad]) {
    acumulador[edad] = 1
  } else {
    acumulador[edad] += 1
  }
  return acumulador
}, {})

console.log(edades)
console.log(resultado)

let ventas = [
  { nombre: 'camiseta', precio: 15, totalVendido: 10 },
  { nombre: 'zapatilla', precio: 150, totalVendido: 8 },
  { nombre: 'pantalon', precio: 20, totalVendido: 30 }
]

const resultado2 = ventas.reduce((acumulador, producto) => {
  let totalVentas = producto.precio * producto.totalVendido
  acumulador[producto.nombre] = `$ ${totalVentas}`
  return acumulador
}, {})

console.log(ventas)
console.log(resultado2)

let estudiantes = [
  { nombre: 'Ada', edad: 20, matriculado: true },
  { nombre: 'Katrina', edad: 19, matriculado: true },
  { nombre: 'Jorge', edad: 22, matriculado: false },
  { nombre: 'Grabriel', edad: 21, matriculado: true },
  { nombre: 'Raul', edad: 19, matriculado: false }
]

const resultado3 = estudiantes
  .map((estudiante) => estudiante.matriculado)
  .reduce((acumulador, item) => {
    if (item) {
      acumulador.matriculado += 1
    } else {
      acumulador.noMatriculado += 1
    }
    return acumulador
  }, { matriculado: 0, noMatriculado: 0 })

console.log(estudiantes)
console.log(resultado3)

let clientes = [
  { id: 1, nombre: 'Ada' },
  { id: 2, nombre: 'Katrina' },
  { id: 3, nombre: 'Dayana' },
  { id: 4, nombre: 'Pamela' },
  { id: 5, nombre: 'Michele' }
]

const cvsGenerator = (array, separator = ',') => {
  let headers = Object.keys(array[0]).join(separator)
  let data = array.map((element) => Object.values(element).join(separator))
  console.log(headers)
  data.forEach(element => console.log(element))
}

cvsGenerator(clientes)

