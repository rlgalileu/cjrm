// Boolean e comparações
console.log(true, false, 'true', 'fase')


// Métodos podem retornar booleans
const email = 'brucewayne@gamil.com'
const includes = email.includes('@')
const names = ['dio', 'roger', 'robert']
const arrayIncludes = names.includes('roger')

console.log(includes)
console.log(arrayIncludes)


// Operadores de comparação
const age = 30
const name = 'roger'

// console.log(age == 30)
// console.log(age == 35)
// console.log(age != 30)
// console.log(age > 30)
// console.log(age < 31)
// console.log(age <= 30)
// console.log(age >= 30)

console.log(name == 'roger')
console.log(name == 'Roger')


console.log(name == 'belinha')  // true
/**
 *  true - o indice [0] de name "r" 
 *  é maior que "b" indice [0] da string "belinha"
 * 
 *  obs. letras minúsculas são maiores que maiúsculas
 */

console.log(name > 'Roger')  // true
console.log(name > 'Belinha')  // true