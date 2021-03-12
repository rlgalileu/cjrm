const article = document.querySelector('article')

// console.log(article.children)  // HTMLCollection 

// Array.from(article.children).forEach(child => {
//   console.log(child)
// })

// console.log(article.children)

Array.from(article.children).forEach(element => {
  element.classList.add('article-element')
})

const h2 = document.querySelector('h2')

console.log(h2.parentElement)
console.log(h2.parentElement.parentElement)
console.log(h2.nextElementSibling)
console.log(h2.nextElementSibling.nextElementSibling)
console.log(h2.previousElementSibling)