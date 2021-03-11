const ul = document.querySelector('ul')
const button = document.querySelector('button')

button.addEventListener('click', () => {
  const li = document.createElement('li')

  li.textContent = 'Novo item'
  ul.append(li)
})

// const lis = document.querySelectorAll('li')

// lis.forEach(li => {
//   li.addEventListener('click', event => {
//     const clickedElement = event.target

//     console.log('Clicou na li')

//     event.stopPropagation()
//     clickedElement.remove()
//   })
// })

ul.addEventListener('click', event => {
  const clickedElement = event.target
  
  if (clickedElement.nodeName === 'LI') { 
    clickedElement.remove()
  }
})