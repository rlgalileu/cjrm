// Conversão de tipos

let score = '100'

console.log(score + 1)  // 1001
console.log(typeof score)  // string

score = Number(score)

console.log(score + 1)  // 101
console.log(typeof score)  // number

const crazyConversion = Number('Maçã')  // NaN
const convertedNumber = String(97)  // 97
const booleanConversion = Boolean(10)  // true

console.log(crazyConversion)  
console.log(convertedNumber, typeof convertedNumber)
console.log(booleanConversion)

/*
  Valores falsy:
    - false
    - 0
    - "", '', ``
    - null
    - undefined
    - NaN

  Valores truthy:
    - Qualquer valor que não é falsy
*/

