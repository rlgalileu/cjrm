// strings
console.log('Hello, world!')

const email = 'rlgalileu@gmail.com'

console.log(email)


// concatenação de strings
const firstName = 'Nathan'
const lastName = 'Drake'
const fullName = firstName + ' ' + lastName

console.log(fullName)


// acessando caracteres
console.log(fullName[0])  // N

console.log(fullName[2])  // t


// comprimento de uma string
console.log(fullName.length)


// métodos de strings
console.log(fullName.toUpperCase())

const result = fullName.toLocaleLowerCase()
console.log(fullName, '|', result)

const index = email.indexOf('@')
console.log(index)