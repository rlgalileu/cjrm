sayHi()  // hoisting ok

/* showFood() */  // erro

// Function declaration
function sayHi() {
  console.log('oi')
}

// Function expression
const showFood = function () {
  console.log('pizza')
}

sayHi()
sayHi()
sayHi()

showFood()
showFood()
showFood()