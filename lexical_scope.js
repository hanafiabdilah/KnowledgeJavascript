// Lexical Scope
// Scope yang dibaca saat kode JavaScript melalui proses compile-time.
// Lexical scope ini yang mengatur discope mana harus mencari sebuah variable

const outerFunction = () => {
  const nama = 'Hanafi'

  const innerFunction = () => {
    console.log(nama)
    // Ketika akan mencetak sebuah nama di dalam InnerFunction
    // Maka akan dicari variable nama didalam inner functionnya terlebih dahulu, jika tidak ditemukan maka akan dicari di parameter innerfunction
    // Jika masih tidak ditemukan maka akan dicari di Scope luarnya / outerFunctionnya. Terus begitu hingga ke global scope
    // Dan proses pencarian ini dinamakan dengan Lexical Scope
  }

  innerFunction()
}

outerFunction()
