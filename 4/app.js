// const board = document.querySelector('#board')
// const colors = ['red', 'blue', 'green', 'yellow', 'purple']
// const SQUARES_NUMBER = 500

// for (let i = 0; i < SQUARES_NUMBER; i++) {
//     const square = document.createElement('div')
//     square.classList.add('square')

//     square.addEventListener('mouseover', () => setColor(square))

//     square.addEventListener('mouseleave', () => removeColor(square))

//     board.append(square)
// }

// function setColor(element) {
//     const color = getRandomColor()
//     element.style.backgroundColor = color // если здест вставить цвет, то работает
//     element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
// }

// function removeColor(element) {
//     element.style.backgroundColor = '#1d1d1d'
//     element.style.boxShadow = `0 0 2px #000`
// }

// function getRandomColor() {
//     const index = Math.floor(Math.random() * colors.lenght)
//     return colors[index]
// }

const board = document.querySelector('#board');
const SQUARES_NUMBER = 500;
const colors = [
  'white',
  'purple',
  'red',
  'orange',
  'yellow',
  'lime',
  'green',
  'aqua',
  'blue',
  'salmon',
];

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const Square = document.createElement('div');
  Square.classList.add('square');

  //Добавляем события
  Square.addEventListener('mouseover', () => {
    setColor(Square);
  });
  Square.addEventListener('mouseleave', () => {
    removeColor(Square);
  });

  board.append(Square);
}

//Обработчики событий
function setColor(element) {
  const Color = getRandomColor();
  element.style.backgroundColor = Color;
  element.style.boxShadow = `0 0 2px ${Color}, 0 0 10px ${Color}`;
}
function removeColor(element) {
  element.style.backgroundColor = '#1d1d1d';
  element.style.boxShadow = '0 0 2px #000';
}

function getRandomColor() {
  const indexColor = Math.floor(Math.random() * colors.length);
  const randomColor = colors[indexColor];
  return randomColor;
}
