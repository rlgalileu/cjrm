// Objetos em arrays

const user = {
  name: 'João',
  age: 31,
  email: 'joaocardoso@gmail.com',
  city: 'São Paulo',
  blogPosts: [
    { title: 'Empadão de frango', likes: 30 },
    { title: '4 receitas de purê de batata', likes: 50 }
  ],

  login: function () {
    console.log('Usuário logado')
  },

  logout: function () {
    console.log('Usuário deslogado')
  },

  logBlogPosts () {
    console.log(`${this.name} escreveu os seguintes posts:`)

    this.blogPosts.forEach(post => {
      console.log(post.title, post.likes)
    })
  }
}

user.logBlogPosts()
