// Higher Order Function
// Sebuah function yang memiliki parameter berupa function atau sebuah function yang me return function lain.

function person(name, age, printYearOfBirth, printName) {
  printName(name)
  printYearOfBirth(age)
}

function printName(name) {
  console.log(`Hello, ${name}`)
}

function printYearOfBirth(age) {
  console.log(`You were born in ${2022 - age}`)
}

person('Hanafi', 20, printYearOfBirth, printName)
