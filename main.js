'use strict'

const container = document.querySelector('.container');
const overlay = document.querySelector('.overlay');
const close = document.querySelector('.close');
const windows = document.querySelectorAll('.window')
console.log(windows);

const closeModal = function(){
    container.classList.add('hidden');
    overlay.classList.add('hidden');
}
const openModal = function(){
    container.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

for(let i = 0 ; i < windows.length ; i++){
    windows[i].addEventListener('click', openModal)
}


close.addEventListener('click',closeModal);
overlay.addEventListener('click', closeModal);
