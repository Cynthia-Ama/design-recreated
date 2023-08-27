const scrollLeft = document.querySelector('.scroll-left')
const scrollRight = document.querySelector('.scroll-right')
const container = document.querySelector('.featuredImageContainer')
const content = document.getElementById("content")


let scrollunit = content.offsetWidth 

scrollLeft.addEventListener('click', ()=>{
    container.scrollLeft -= scrollunit
})

scrollRight.addEventListener('click', ()=>{
    container.scrollLeft += scrollunit 
})