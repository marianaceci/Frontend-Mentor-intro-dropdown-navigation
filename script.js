//MAIN MENU
let openMenu = document.getElementById('open-menu')
let closeMenu = document.getElementById('close-menu')
let menu = document.getElementById('menu')
let darkBackground = document.getElementById('dark-background')

openMenu.addEventListener('click', () => {
    menu.classList.toggle('show-menu')
    openMenu.classList.toggle('display-none')
    closeMenu.classList.toggle('display-none')
    darkBackground.classList.add('dark-background')
})

closeMenu.addEventListener('click', () => {
    menu.classList.toggle('show-menu')
    openMenu.classList.toggle('display-none')
    closeMenu.classList.toggle('display-none')
    darkBackground.classList.remove('dark-background')
})

/*
let menuItem = document.getElementById('menu-item')
menuItem.addEventListener('click', (e) => {
    console.log(e.target.innerText.toLowerCase())
})
*/




//FEATURES SUB-MENU
let buttonFeatures = document.getElementById('button-features')
let showFeatures = document.getElementById('show-features')
let closeFeatures = document.getElementById('close-features')
let subMenuFeatures = document.getElementById('sub-menu-features')
buttonFeatures.addEventListener('click', () => {
    subMenuFeatures.classList.toggle('display-none')
    closeFeatures.classList.toggle('display-none')
    showFeatures.classList.toggle('display-none')
})

closeFeatures.addEventListener('click', () => {
    subMenuFeatures.classList.toggle('display-none')
    closeFeatures.classList.toggle('display-none')
    showFeatures.classList.toggle('display-none')
})


//COMPANY SUB-MENU
let buttonCompany = document.getElementById('button-company')
let showCompany = document.getElementById('show-company')
let closeCompany = document.getElementById('close-company')
let subMenuCompany = document.getElementById('sub-menu-company')
buttonCompany.addEventListener('click', () => {
    subMenuCompany.classList.toggle('display-none')
    closeCompany.classList.toggle('display-none')
    showCompany.classList.toggle('display-none')
})

closeCompany.addEventListener('click', () => {
    subMenuCompany.classList.toggle('display-none')
    closeCompany.classList.toggle('display-none')
    showCompany.classList.toggle('display-none')
})


