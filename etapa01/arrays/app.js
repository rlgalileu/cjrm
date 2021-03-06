// Arrays
let heroes = ['Batman', 'Catwoman', 'Iron Man', 'Spider-Man']
const ages = [31, 25, 39, 40, 25]
const randomArray = ['Parker', 'Diana', 19, 18]

console.log(heroes)
console.log(ages)
console.log(randomArray)


// Métodos de arrays
const joinHeroes = heroes.join(', ')
const indexOf25 = ages.indexOf(25)  // Se o valor passado como argumento não existir, retorna -1
const moreHeroes = heroes.concat(['Superman', 'Wolverine'])

console.log(joinHeroes)
console.log(indexOf25)
console.log(moreHeroes)

const pushToHeroes = heroes.push('Cyclops', 'Hulk')
console.log(pushToHeroes, heroes)

const popHeroes = heroes.pop()
console.log(popHeroes)
console.log(heroes)