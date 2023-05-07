// Style opacity nav bar
setTimeout(function() {
    document.querySelector('.nav__bar').classList.add('animation');
  }, 1000);

 setTimeout(function() {
    document.querySelector('.nav__items__container').classList.add('animation');
 }, 1500)

// toggle nav menu 
document.querySelector('.bars__menu').addEventListener('click', animateBars);

let navItemsContainer = document.querySelector('.nav__items__container');

let line1__bars = document.querySelector('.line1__bars-menu');
let line2__bars = document.querySelector('.line2__bars-menu');
let line3__bars = document.querySelector('.line3__bars-menu');

function animateBars(){
   line1__bars.classList.toggle('activeline1__bars-menu');
   line2__bars.classList.toggle('activeline2__bars-menu');
   line3__bars.classList.toggle('activeline3__bars-menu');

   navItemsContainer.classList.toggle('toggle-menu');
}
