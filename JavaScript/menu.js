//Menu hamburguesa//

const toggleBtn = document.querySelector('.menu')
const toggleBtnIcon = document.querySelector('.menu img')
const menuHamburguesa = document.querySelector('.menu-hamburguesa')

toggleBtn.onclick = function () {
    menuHamburguesa.classList.toggle('open')
}