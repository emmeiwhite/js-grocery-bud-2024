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
let editFlag = true
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
  }
}

groceryForm.addEventListener('submit', handleSubmit)
