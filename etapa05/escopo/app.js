function myfunc () {
  let cat = 'Zeca'
  const age = 3
  var color = 'cinza'
  console.log(age)
}

function myFunc2 () {
  var color = 'preto'
  const age = 5
  console.log(age)
}

/*
console.log(cat)
console.log(age)
console.log(color)
*/

// myFunc()
// myfunc2()

// const dog = 'Pastor-alemão'

// function dogWatch () {
//   const dog = 'Samoieda'
//   console.log(dog)
// }

// dogWatch()
// console.log(dog)

// if (true) {
//   const dragon = 'Balerion'
//   console.log(dragon)
// }

// if (true) {
//   var dragon = 'Balerion'
//   console.log(dragon)
// }

// console.log(dragon)

const external = () => {
  const book = 'Sapiens'

  const internal = () => {
    let x = 10
    const book = 'Os testamentos'
    console.log(book.toUpperCase())

    const extraInternal = () => {
      console.log(book.toUpperCase())
    }

    extraInternal()
  }

  internal()
  // console.log(x)  // erro
}

external()