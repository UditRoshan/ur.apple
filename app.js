const menuLines = document.querySelector('.menu-lines')
const menu = document.querySelector('.menu')
const line1 = document.querySelector('.line1')
const line2 = document.querySelector('.line2')
const line3 = document.querySelector('.line3')

menuLines.addEventListener('click', ()=>{
    if (menu.style.right == '0%' && line1.style.backgroundColor == 'black' && line2.style.backgroundColor == 'black' && line3.style.backgroundColor == 'black' && line1.style.transform == 'rotate(45deg)' && line3.style.transform == 'rotate(-45deg)' && line1.style.top == '50%' && line3.style.top == '50%' && line2.style.opacity == '0') {

        menu.style.right = '-40%'
        line1.style.backgroundColor = 'white'
        line2.style.backgroundColor = 'white'
        line3.style.backgroundColor = 'white'

        line1.style.transform = 'rotate(0deg)'
        line3.style.transform = 'rotate(0deg)'

        line1.style.top = '30%'
        line3.style.top = '70%'

        line2.style.opacity = '1'

    } else {

        menu.style.right = '0%'
        line1.style.backgroundColor = 'black'
        line2.style.backgroundColor = 'black'
        line3.style.backgroundColor = 'black'

        line1.style.transform = 'rotate(45deg)'
        line3.style.transform = 'rotate(-45deg)'

        line1.style.top = '50%'
        line3.style.top = '50%'

        line2.style.opacity = '0'

    }
})