// Scope adalah sebuah lingkup atau jangkauan sebuah variabel.
// Scope ada dua, yaitu global dan local.

// Scope Global
// Scope Global adalah sebuah lingkup yang dimiliki oleh sebuah program.
// Variabel dapat diakses oleh seluruh program, baik di dalam atau di luar function
const nama = 'Hanafi'
const umur = 20

// Scope Local
// Scope Local adalah sebuah lingkup yang dimiliki oleh sebuah function.
// Variabel dapat diakses oleh function tersebut dan inner functionnya saja, tidak dapat diakses di global scope
function identitas() {
  const nama = 'Abdilah'
  const umur = 20
}
