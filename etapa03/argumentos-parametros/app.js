// Argumentos, parâmetros e default parameters

const myFunc = function (name = 'Estrôncio', lastName = 'Petrúcio') {
  console.log(`Oi, ${name} ${lastName}!`)
}

myFunc('Galileu', 'Lima')
myFunc('Miguel', 'Santos')
myFunc()
myFunc('Pedro')
