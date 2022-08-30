// Reduce
// Sebuah prototype method yang dimiliki oleh Array
// Reduce akan menghasilkan nilai yang diakumulasi dari setiap elemen pada array

const populations = [
  {
    region: 'Bali',
    population: 3000,
  },
  {
    region: 'Sumatera',
    population: 1500,
  },
  {
    region: 'Jawa',
    population: 5000,
  },
]

const totalPopulation = populations.reduce((acc, el) => {
  return acc + el.population
}, 0)

console.log(totalPopulation)
