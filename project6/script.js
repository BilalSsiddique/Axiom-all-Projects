// GET DOM ELEMENTS
const menuToggle = document.getElementById('toggle');
const close = document.getElementById('close')
const open = document.getElementById('open');
const modal = document.getElementById('modal')
const body = document.getElementById('auto-reload');

// Event Listneres
// 1. Listen for click on toggle button
menuToggle.addEventListener('click', () => {
    document.body.classList.toggle('show-nav')
})


// Solve auto reload proble
body.addEventListener('click', (e) => {
    e.preventDefault()
})

// 2. Listen for click on open Button
open.addEventListener('click', () => modal.classList.add('show-modal'))

// 3. Listen for click on close Button
close.addEventListener('click', () => modal.classList.remove('show-modal'));

// 4.Listen for click outside of modal
window.addEventListener('click', (e) => {
    e.target == modal ? modal.classList.remove('show-modal') : false
})



