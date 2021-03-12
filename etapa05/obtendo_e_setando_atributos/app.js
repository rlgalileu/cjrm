// Obtendo e setando atributos

const link = document.querySelector('a')

console.log(link.getAttribute('href'))

link.setAttribute('href', 'https://www.glogo.com.br')
link.innerHTML = 'globo'


const paragraph = document.querySelector('p')

console.log(paragraph.getAttribute('class'))

paragraph.setAttribute('class', 'success')
paragraph.setAttribute('style', 'color: red;')