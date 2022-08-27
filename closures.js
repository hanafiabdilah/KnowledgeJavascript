// Closure
// Sebuah function yang ada didalam function lain, dan inner function tersebut mengakses variable yang ada di luar scopenya / outer functionnya.

const outerFunction = () => {
  const nama = 'Hanafi'

  const innerFunction = () => {
    console.log(nama)
  }

  innerFunction()
}

outerFunction()
