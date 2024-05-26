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
    const item = `<article class="grocery-item" data-id=${id}>
            <p class="title">${value}</p>
            <div class="btn-container">
              <button
                type="button"
                class="edit-btn"
              >
                <i class="fas fa-edit"></i>
              </button>

              <button
                type="button"
                class="delete-btn"
              >
                <i class="fas fa-trash"></i>
              </button>
            </div>
          </article>`

    /** 1) Adding the item & displaying success alert message */
    groceryContainer.classList.add('show-container')
    groceryList.insertAdjacentHTML('beforeend', item)
    displayAlert('Item added to the list', 'success')

    /** 2) Add to the local storage */

    /** 3) Set back to default */
    setBackToDefault()
  } else if (value && editFlag) {
    console.log('editing')
  } else {
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

// clear items
function clearItems() {
  console.log('clear button clicked!')
  groceryContainer.classList.remove('show-container')
  groceryList.innerHTML = ''

  displayAlert('cleared all the items', 'success')
  setBackToDefault()
  /** --- To remove the list from local storage as well --- */
  // localStorage.removeItem('list)
}
// set to default
function setBackToDefault() {
  input.value = ''
  editFlag = false
  editID = ''
  submitBtn.textContent = 'submit'
}

// add to the local storage
function addToLocalStorage(id, value) {
  console.log('added to the local storage')
}

function removeFromLocalStorage(id) {}

/////////////////// WE START FROM HERE ////////////////////////
groceryForm.addEventListener('submit', handleSubmit)
clearAllBtn.addEventListener('click', clearItems)

/** ---For edit and delete, we are going with edit bubbling! --- */
groceryList.addEventListener('click', e => {
  // A) delete item
  if (e.target.classList.contains('fa-trash')) {
    const groceryItem = e.target.closest('.grocery-item')
    const id = groceryItem.dataset.id

    console.log(id)
    if (groceryItem) {
      groceryItem.remove()
      displayAlert('item deleted', 'success')
    }

    if (groceryList.children.length === 0) {
      groceryContainer.classList.remove('show-container')
    }

    setBackToDefault()
    // remove from local storage
    /* removeFromLocalStorage(id) */
  }

  // B) edit item
  if (e.target.classList.contains('fa-edit')) {
    console.log('clicked on the edit button')
  }
})
