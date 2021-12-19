const start = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('#time-id');
let time = 0;
let score = 0
const timeGame = document.querySelector('#time');
const board = document.querySelector('#board');
const colors = ['blue','red','hotpink','white','green','yellow','orange']
console.log(timeList);





start.addEventListener('click', event => {
    event.preventDefault()
    screens[0].classList.add('up')
})

timeList.addEventListener('click', event => {
    if (event.target.classList.contains('time-btn')) {
        time = +(event.target.getAttribute('data-time'))
        startGame()
    }
})

board.addEventListener('click', event => {
    if (event.target.classList.contains('circle')) {
        score++;
        event.target.remove()
        createRandomCircle()
    }
})

function startGame () {
    screens[1].classList.add('up') ;
    setTime(time);
    setInterval(decTime, 1000);
    createRandomCircle();
}

function decTime() {
if (time === 0) {
    finishGame()
} else {
    let current = --time
    if (current < 10) {
        current = `0${current}`
    }
    setTime(current)
   }
}

function setTime(value) {
    timeGame.innerHTML = `00:${value}`
};

function finishGame() {
    board.innerHTML = `<h1>Ваш счёт: <span class='primary'>${score}</span></h1>`;
    timeGame.parentNode.classList.add('hide')
};

function createRandomCircle() {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    const size = getNumber(10, 45);
    const {width, height} = board.getBoundingClientRect();
    const x = getNumber(0, width - size);
    const y = getNumber(0, height - size);
    circle.style.height = size + "px";
    circle.style.width = size + "px"; 
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    circle.style.background = colors[(getNumber(0,6))]
    board.append(circle)
}

function getNumber(max,min) {
    return Math.round(Math.random() * (max - min) + min)
}

