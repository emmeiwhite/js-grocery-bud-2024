// Form DOM Element
const groceryForm = document.querySelector('.grocery-form')
const submitBtn = document.querySelector('.submit-btn')
const alert = document.querySelector('.alert')
const input = document.querySelector('#grocery')

// Grocery Container Form Elements
const groceryContainer = document.querySelector('.grocery-container')
const groceryList = document.querySelector('.grocery-list')

// Clear All items button
const clearAllBtn = document.querySelector('.clear-btn')

// Declaring some variables for editing the list
let editElement
let editFlag = false
let editID

/** --- Now Setting up Event Listeners  --- */

function handleSubmit(e) {
  e.preventDefault()

  const value = input.value
  const id = new Date().getTime().toString()

  if (value && !editFlag) {
    console.log('add item to the list')
  } else if (value && editFlag) {
    console.log('editing')
  } else {
    console.log('empty value')
    displayAlert('Please enter value', 'danger')
  }
}

// display alert
function displayAlert(text, action) {
  alert.textContent = text
  alert.classList.add(`alert-${action}`)

  // remove alert after 3 seconds
  const timer = setTimeout(() => {
    alert.textContent = ''
    alert.classList.remove(`alert-${action}`)
    clearTimeout(timer)
  }, 3000)
}

groceryForm.addEventListener('submit', handleSubmit)
