// variáveis e escopo de bloco

const age = 31

if (true) {
  const age = 41
  const name = 'Tadeu'

  console.log(`dentro do 1º bloco de código: ${age} ${name}`)

  if (true) {
    const age = 51
    console.log(`dentro do 2º bloco de código: ${age}`)

    var test = 'oi'  // não utilizar
  }
}

console.log(`fora do bloco de código: ${age} ${name} ${test}`)

