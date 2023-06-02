const btn = document.getElementById('button')
const inputName = document.getElementById('name')
const inputAva = document.querySelector('.avatar')
const inputMessage = document.getElementById('massage')
const result = document.getElementById('result')

btn.addEventListener('click', (event) => {
  event.preventDefault()
  let name = inputName.value.toLowerCase()
  name = name[0].toUpperCase() + name.slice(1)
  let avatarUrl = inputAva.value
  let message = checkSpam(inputMessage.value)
  result.innerHTML = `<div>${name}</div><img src='${avatarUrl}'/><div>${message}</div>`
})

const checkSpam = (str) => {
  return str.replace('viagra', '***')
}
