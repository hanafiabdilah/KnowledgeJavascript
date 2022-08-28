// Closure
// 1. Sebuah function yang ada didalam function lain, dan inner function tersebut mengakses variable yang ada di luar scopenya / outer functionnya.
// 2. Sebuah function yang mengembalikan / return function lain.

// 1
const outerFunction = () => {
  const nama = 'Hanafi'

  const innerFunction = () => {
    console.log(nama)
  }

  innerFunction()
}

outerFunction()

// 2
const sayHello = (time) => {
  return (name) => {
    console.log(`Hello ${name}, good ${time}`)
  }
}

sayHello('Morning')('Hanafi')
