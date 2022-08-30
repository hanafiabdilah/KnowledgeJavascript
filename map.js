// Map
// Prototype method yang dimiliki oleh Array
// Map ini akan menghasilkan array yang baru
// Map digunakan untuk merubah setiap elemen didalam array menjadi elemen baru yang mengikuti perintah pada callback function.

const numbers = [1, 2, 3, 4, 5]

// Mengalikan setiap elemen pada array dengan 2
const newNumber = numbers.map((e) => e * 2) // [2, 4, 6, 8, 10]
console.log(newNumber)
