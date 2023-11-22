

const open = document.querySelector('#open');
const close = document.querySelector('#close');
const container = document.querySelector('.container');

// Open rotating menu
open.addEventListener('click',() => {
    container.classList.add('show-nav');
})

// Close rotating menu
close.addEventListener('click',() => {
    container.classList.remove('show-nav');
})