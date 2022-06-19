'use strict';

const modal = document.querySelector('.modal');
const overLay = document.querySelector('.overlay');
const closeModalBtn = document.querySelector('.close-modal');
const openModalBtn = document.querySelectorAll('.show-modal');

let openModal = function(){
    modal.classList.remove('hidden');
    overLay.classList.remove('hidden');
}

let closeModal = function(){
    modal.classList.add('hidden')   
    overLay.classList.add('hidden');
}

for (let i = 0; i < openModalBtn.length; i++){
    openModalBtn[i].addEventListener('click', openModal);
}

closeModalBtn.addEventListener('click', closeModal);
overLay.addEventListener('click', closeModal);