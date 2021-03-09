// Document Object Model
// Query selector & query selector all

const paragraph = document.querySelector('p')
console.log(paragraph)

const errorDiv = document.querySelector('div.error')
console.log(errorDiv)

const paragraphs = document.querySelectorAll('p')
console.log(paragraphs)  // NodeList

console.log(paragraphs[2])

paragraphs.forEach(paragraph => {
  console.log(paragraph)
});

const erros = document.querySelectorAll('.error')
console.log(erros)


