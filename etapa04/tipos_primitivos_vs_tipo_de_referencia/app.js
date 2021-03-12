// valores primitivos

let scoreOne = 50
let scoreTwo = scoreOne

console.log(`scoreOne: ${scoreOne} | scoreTwo: ${scoreTwo}`)

scoreOne = 100

console.log(`scoreOne: ${scoreOne} | scoreTwo: ${scoreTwo}`)

// valores de referência

let userOne = { name: 'Miguel', age: 2 }
let userTwo = userOne

console.log(userOne, userTwo)

userOne.name = 'Joaquim'
userTwo.age = 3

console.log(userOne, userTwo)