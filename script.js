const navBar = document.querySelector('.nav-bar')
const list = document.querySelector('.list')
const x = document.querySelector('.x-icon')

const openNav = () =>{
    navBar.style.marginTop = '0'
    list.style.display = 'none'
    x.style.display = 'flex'
}

const closeNav = () =>{
    navBar.style.marginTop = '-110px'
    x.style.display = 'none'
    list.style.display = 'flex'
}