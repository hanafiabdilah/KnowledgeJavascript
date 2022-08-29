// Prototype
// prototype digunakan untuk memberikan properti / method tambahan pada objek turunan dari constructur yang telah dibuat

// Contoh penggunaan prototype menggunakan contructor function
function Person(first, last, age) {
  this.firstName = first
  this.lastName = last
  this.age = age
  this.showAge = function () {
    return `My age is ${this.age} years old`
  }
}

Person.prototype.nationality = 'Indonesia'
Person.prototype.showName = function () {
  return `My name is ${this.firstName} + ${this.lastName}`
}
Person.prototype.addAge = function (enhancher) {
  this.age += enhancher
  return `Age has increased to ${this.age}`
}

const hanafi = new Person('Hanafi', 'Abdilah', 20)
const rahman = new Person('Rahman', 'Abdul', 21)

// Ketika ingin menambahkan satu property atau method baru pada salah satu objek saja, prototype tidak diperlukan, cukup membuatnya di satu object itu saja
hanafi.property = 'Properti tambahan di satu objek'

// Versi Class
// Ini sebenarnya hanya penulisannya saja seperti pada konsep OOP,
// Tapi sebenarnya dibelakang layar konsep ini akan diterjemahkan menjadi seperti contoh diatas / menggunakan constructor function
class Person {
  constructor(first, last, age) {
    this.firstName = first
    this.lastName = last
    this.age = age
    this.showAge = function () {
      return `My age is ${this.age} years old`
    }
  }

  showName() {
    return `My name is ${this.firstName} + ${this.lastName}`
  }

  addAge(enhancher) {
    return `Age has increased to ${(this.age += enhancher)}`
  }
}

const hanafi = new Person('Hanafi', 'Abdilah', 20)
const rahman = new Person('Rahman', 'Abdul', 21)

hanafi.property = 'Properti tambahan di satu objek'
