// Pass by value adalah menyalin sebuah nilai dari variable utama ke variable lainnya.
// -> String, Number, Boolean, Symbol
// Pass by reference adalah memberikan referensi kepada variable lain ke alamat lokasi variable utama.
// -> Array, Object

// Pass by value
// Variable x tidak akan berubah ketika kita mengubah nilai dari variable y. Karena x tidak memberikan referensi ke variable y, tetapi menyalin nilainya. Jadi, keduanya tidak memiliki hubungan.
let x = 1
let y = x
y = 2

console.log(x)
console.log(y)

// Pass by reference
// Variable person akan ikut berubah jika variable pada newPerson diubah. Itu karena variable person memberikan referensinya kepada variable newPerson, tidak menyalin nilai dari variable person ke variable newPerson.
let person = { name: 'Hanafi' }
let newPerson = person
newPerson.name = 'Abdilah'

console.log(person)
console.log(newPerson)
