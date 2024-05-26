// Form DOM Element
const groceryForm = document.querySelector('.grocery-form')
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
