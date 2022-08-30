// Filter
// Filter merupakan sebuah prototype method yang dimiliki Array
// Filter ini akan menghasilkan array yang baru
// Filter digunakan untuk memilih setiap element pada array dengan kondisi tertentu

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Mencari setiap elemen pada array yang memiliki nilai ganjil
const oddNumbers = numbers.filter((e) => e % 2 !== 0) // [1, 3, 5, 7, 9]
console.log(oddNumbers)
