// Primitif hanya dapat menyimpan satu nilai pada satu waktu, dan tidak dapat berubah. Primitif dianggap benar jika dibandingkan dengan nilai yang sama.
// -> Boolean, Number, String, dan Symbol
// Non Primitif dapat menyimpan banyak nilai pada satu waktu, dan dapat berubah. Non Primitif dianggap salah walaupun dibandingkan dengan nilai dan urutannya sama.
// -> Array, Object, dan Function

// Primitif

// 1
// variable num memberikan salinan nilai yang dimilikinya ke varible newNum. maka dari itu varible num dan variable newNum memiliki nilai masing masing, dan tidak berhubungan.
let num = 1
let newNum = num
newNum = 2

console.log(num)
console.log(newNum)

// 2
// ini membuktikan bahwa jika value dari kedua variable adalah sama, maka jika dibandingkan hasilnya adalah True
const num = 1
const num2 = 1
console.log(num === num2)

// Non Primitif

// 1
// variable person tidak memberikan salinan tetapi memberikan referensinya ke variable newPerson. maka dari itu varible person dan variable newPerson memiliki referensi yang sama, dan berhubungan. Jika salah satu nya diubah maka keduanya akan ikut berubah
let person = {
  name: 'Hanafi',
  age: 20,
}

let newPerson = person
newPerson.name = 'Abdilah'

console.log(person)
console.log(newPerson)

// 2
// ini membuktikan bahwa non primitif akan bernilai false jika dibandingkan dengan nilai dan urutan yang sama, karena referensinya berbeda
const person = { name: 'Hanafi' }
const person2 = { name: 'Hanafi' }

console.log(person === person2)

//3
// non primitif akan bernilai true jika membandingkan dengan referensi yang sama
const person = { name: 'Hanafi' }
const person2 = person

console.log(person === person2)
