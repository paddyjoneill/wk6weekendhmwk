document.addEventListener('DOMContentLoaded', () => {
  console.log('javascript has loaded');

  const deleteButton = createDeleteButton()


  const submitForm = document.querySelector('#form')
  submitForm.addEventListener('submit', handleSubmitForm)
})

const handleSubmitForm = function (event) {
  event.preventDefault()
  console.log(event)

  const listItem = createListItem(event)

  const list = document.querySelector('#list')
  list.appendChild(listItem)

  const submitForm = document.querySelector('#form')
  submitForm.reset()
}

const createListItem = function (event) {
  const listItem = document.createElement('li')

  const animalName = document.createElement('h2')
  animalName.textContent = event.target.name.value

  const animalSpecies = document.createElement('h3')
  animalSpecies.textContent = event.target.species.value

  const animalContinent = document.createElement('h3')
  animalContinent.textContent = event.target.continent.value

  const animalEndangered = document.createElement('h3')
  animalEndangered.textContent = event.target.endangered.value

  listItem.appendChild(animalName)
  listItem.appendChild(animalSpecies)
  listItem.appendChild(animalContinent)
  listItem.appendChild(animalEndangered)

  return listItem
}

const createDeleteButton = function () {
  deleteButton = document.createElement('button')
  deleteButton.textContent = 'Delete All'
  deleteButton.id = '#delete-button'
  const body = document.querySelector('body')
  body.appendChild(deleteButton)
  deleteButton.addEventListener('click', handleDeleteButtonClick)
  return deleteButton
}

const handleDeleteButtonClick = function (event) {
  const list = document.querySelector('#list')
  list.innerHTML = ''
}
