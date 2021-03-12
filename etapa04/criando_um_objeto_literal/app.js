// criando um objeto literal

let user = {
  name: 'João',
  age: 31,
  email: 'joao@gmail.com',
  city: 'São Paulo',
  blogPosts:['Empadão de frango', '4 receitas de purê de batata']
}

console.log(user)
console.log(user.name)

user.age = 32

console.log(user.age)

console.log(user['email'])

user['name'] = 'José'

console.log(user.name)

const email = 'email'

user[email] = 'jose@gmail.com'

console.log(user.email)

console.log(typeof user)