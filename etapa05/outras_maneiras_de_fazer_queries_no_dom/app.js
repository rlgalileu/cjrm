// obter um elemento através do ID
const title = document.getElementById('title')

console.log(title)

// obter elementos através do nome da classe
const errors = document.getElementsByClassName('error')

Array.from(errors).forEach(error => {
  console.log(error)
}) 

// obter elementos através do nome da tag
const paragraph = document.getElementsByTagName('p')

console.log(paragraph)