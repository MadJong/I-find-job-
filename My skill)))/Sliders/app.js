const up = document.querySelector('.up-button')
const down = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const num = sidebar.querySelectorAll('div').length
const mainSlide = document.querySelector('.main-slide') 
const container = document.querySelector('.container')

sidebar.style.top = `-${100 * (num - 1)}vh`

let activeSlide = 0

up.addEventListener('click', () => {
    changeSlide('up')
})
down.addEventListener('click', ()=> {
    changeSlide('down')
})

document.addEventListener('keydown', event => {
    if (event.key === 'ArrowUp') {
        changeSlide('up')
    } else if (event.key === 'ArrowDown') {
        changeSlide('down')
    }
})

function changeSlide(direction) {
    if (direction === 'up') {
        activeSlide++ 
        
        if (activeSlide === num) {
            activeSlide = 0
        }
        
    } else if (direction === 'down') {
        activeSlide-- 
        if (activeSlide < 0) {
            activeSlide = num - 1
        }
    }
    const height = container.clientHeight
    sidebar.style.transform = `transLateY(${activeSlide * height}px)`
    mainSlide.style.transform = `translateY(-${activeSlide * height}px)`
}


