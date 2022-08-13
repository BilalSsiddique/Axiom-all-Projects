// GET DOM ELEMENTS
const menuToggle= document.getElementById('toggle');
const close = document.getElementById('close')
const open= document.getElementById('open');
const modal = document.getElementById('modal')


// Event Listneres
// 1. Listen to click on toggle button
menuToggle.addEventListener('click',()=>{
    document.body.classList.toggle('show-nav')
})