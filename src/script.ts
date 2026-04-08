import Header from './components/header/index';
import Footer from './components/footer/index';
import About from './components/about/index';

import Choices from 'choices.js';
import 'choices.js/public/assets/styles/choices.min.css';

const selectElement = document.getElementById('choices-multiple-options');

if (selectElement) {
  const choices = new Choices(selectElement, {
    silent: false,
    removeItemButton: true,
    placeholderValue: 'Select your fav coffee',
    maxItemCount: 2,
  });
}

let header = document.querySelector('#header') as HTMLElement;
let footer = document.querySelector('#footer') as HTMLElement;
let about = document.querySelector('#about') as HTMLElement;
let explore = document.querySelector('#explore') as HTMLElement;
let products = document.querySelector('.products') as HTMLElement;

header!.innerHTML = Header;
footer!.innerHTML = Footer;

if (about) {
  about!.innerHTML = About;
}

let subscribeInput = document.querySelector('#mail') as HTMLInputElement;
let subscibeBtn = document.querySelector(
  '.subscribe-form button',
) as HTMLButtonElement;
let mailErrorMsg = document.querySelector('.mail-error') as HTMLElement;
let burger = document.querySelector('.burger') as HTMLButtonElement;
let menu = document.querySelector('.menu') as HTMLElement;
let close = document.querySelector('.close-menu') as HTMLButtonElement;

burger.addEventListener('click', () => {
  menu.classList.toggle('show');
});

close.addEventListener('click', () => {
  menu.classList.remove('show');
});

if (explore) {
  explore.addEventListener('click', (e) => {
    e.preventDefault();
    products.scrollIntoView({ block: 'start', behavior: 'smooth' });
  });
}

subscibeBtn.addEventListener('click', (e) => {
  e.preventDefault();

  let mailAddress = subscribeInput.value;

  if (!/[@]/.test(mailAddress)) {
    mailErrorMsg.innerText = '*Not correct mail address';
  } else if (mailAddress.length < 7) {
    mailErrorMsg.innerText = '*Not valid mail address';
  } else {
    mailErrorMsg.innerText = '';
    console.log(mailAddress);
  }
  let form = document.querySelector('.subscribe-form') as HTMLFormElement;
  form.reset();
});
