// A palavra chave this

const user = {
  name: 'João',
  age: 31,
  email: 'joaocardoso@gmail.com',
  city: 'São Paulo',
  blogPosts: ['Empadão de frango', '4 receitas de purê de batata'],

  login: function () {
    console.log('Usuário logado')
  },

  logout: function () {
    console.log('Usuário deslogado')
  },

  logBlogPosts () {
    console.log(`${this.name} escreveu os seguintes posts:`)

    this.blogPosts.forEach(post => {
      console.log(post)
    })
  },

  // Arrows functions consideram o ponto onde o método foi invocado
  test: () => console.log(this)
}

user.logBlogPosts()

user.test()  // objeto window
