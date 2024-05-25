// ****** SELECT ITEMS **********
const input = document.querySelector('input')
const form = document.querySelector('form')
const ul = document.querySelector('ul')

// edit option

// ****** EVENT LISTENERS **********

form.addEventListener('submit', e => {
  e.preventDefault()

  if (!input.value.trim()) return

  const listItem = document.createElement('li')
  listItem.textContent = input.value
  ul.appendChild(listItem)

  input.value = ''
})

// ****** FUNCTIONS **********

// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
