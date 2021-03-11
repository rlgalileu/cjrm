/* Adicionando e removendo estilos CSS */

// const paragraph = document.querySelector('p')

// paragraph.classList.add('error')
// paragraph.classList.remove('error')
// paragraph.classList.add('success')

// const paragraphs = document.querySelectorAll('p')

// paragraphs.forEach(paragraph => {
//   const errorStyle = paragraph.textContent.includes('error')
//   const successStyle = paragraph.textContent.includes('success')

//   if (errorStyle) {
//     paragraph.classList.add('error')
//   } else if (successStyle) {
//     paragraph.classList.add('success')
//   }
// })

/* Alternando estilos CSS */

const title = document.querySelector('h1')

title.classList.toggle('test')  // adiciona a classe test (alterna)
title.classList.toggle('test')  // remove a classe test (alterna)