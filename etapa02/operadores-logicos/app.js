// operadores lógicos || e &&

const password = 'abc123e'

if (password.length >= 12 && password.includes('1')) {
  console.log('Senha muito forte =)')
} else if (password.length >= 8 || password.includes('1') && password.length>= 5) {
  console.log('Senha forte')
} else {
  console.log('A senha deve conter 8 ou mais caracteres')
}