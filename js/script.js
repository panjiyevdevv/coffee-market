let navbar = document.querySelector('.navbar')
let searchForm = document.querySelector('.search-form')
let cartItem = document.querySelector('.cart-items-container')

document.querySelector('#menu-btn').addEventListener('click', ()=>{
    navbar.classList.toggle('active')
    searchForm.classList.remove('active')
    cartItem.classList.remove('active')
})

document.querySelector('#search-btn').addEventListener('click', ()=>{
    searchForm.classList.toggle('active')
    navbar.classList.remove('active')
    cartItem.classList.remove('active')
})

document.querySelector('#cart-btn').addEventListener('click', ()=>{
    cartItem.classList.toggle('active')
    navbar.classList.remove('active')
    searchForm.classList.remove('active')
})

window.onscroll = ()=>{
    navbar.classList.remove('active')
    searchForm.classList.remove('active')
    cartItem.classList.remove('active')
}