'use strict';
const btnsOpenModals = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModall = document.querySelector('.close-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  closeModall.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModals.length; i++) {
  btnsOpenModals[i].addEventListener('click', openModal);
}

closeModall.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
