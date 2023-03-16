import { characters } from '/chArray.js'

let RandomNumbers = []
let boxNumbers2 = []
let isAlive = false

const btn = document.querySelector('.btn')
const pwBoxOne = document.querySelector('#p-box-one')
const pwBoxTwo = document.querySelector('#pwbox2')

function pushPw() {
  for (let i = 0; i < 15; i++) {
    let randomIndex = characters[Math.floor(Math.random() * characters.length)]

    RandomNumbers.push(randomIndex)
  }
  for (let i = 0; i < 15; i++) {
    let index2 = characters[Math.floor(Math.random() * characters.length)]

    boxNumbers2.push(index2)
  }
}

btn.addEventListener('click', function () {
  pushPw()
  pwBoxOne.textContent = RandomNumbers.join('')
  pwBoxTwo.textContent = boxNumbers2.join('')
  RandomNumbers = []
  boxNumbers2 = []
})

// characters[Math.floor(Math.random() * characters.length)]
