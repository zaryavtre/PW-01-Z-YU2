const characters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '~',
  '`',
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '_',
  '-',
  '+',
  '=',
  '{',
  '[',
  '}',
  ']',
  ',',
  '|',
  ':',
  ';',
  '<',
  '>',
  '.',
  '?',
  '/',
]

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
