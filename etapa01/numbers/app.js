// inteiros e decimais
const radius = 10
const pi = 3.14

console.log(radius, pi)


// operadores aritméticos
const area = pi * radius ** 2


// ordem de operações
console.log(area)
/*
  1º parênteses
  2º expoentes ou raízes
  3º multiplicação e divisão
  4º adição e subtração
*/

const crazyOperation = 5 * (10 - 3) ** 2
console.log(crazyOperation)


// operadores addition, subtraction, multiplication e division assignment
let postLikes = 10

// postLikes = postLikes + 1
// postLikes += 1 
postLikes++
console.log(postLikes)

postLikes += 10
console.log(postLikes)

postLikes -= 5
console.log(postLikes)

postLikes *= 6
console.log(postLikes)

postLikes /= 2
console.log(postLikes)


// NaN - not a number
console.log(7 / 'Hello, world!')


// concatenação de string com número
const likesMessage = 'O post tem ' + postLikes + ' likes.'
console.log(likesMessage)
