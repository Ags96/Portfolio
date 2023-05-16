// Style opacity nav bar
setTimeout(function() {
    document.querySelector('.nav__bar').classList.add('animation');
  }, 800);

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

// Switch lang button & change language
const profileParagraph = document.querySelector('.profile__description')
const switchLang = document.querySelector('#switch');

let isMoved = false;

const toggleLanguage = () => {
   if (!isMoved) {
      switchLang.style.transform = 'translateX(200%)';
      switchLang.classList.remove('circle__es');
      switchLang.classList.add('circle__en');
      profileParagraph.innerHTML = '<span class="first-word">Hola!</span> tengo 26 años. Soy desarrollador Frontend. estudiante FullStack en formación, busco mejorar constantemente, aprender y adquirir experiencia cada día.'
    } else {
      switchLang.style.transform = 'translateX(0)';
      switchLang.classList.remove('circle__en');
      switchLang.classList.add('circle__es');
      profileParagraph.innerHTML = `<span class="first-word">Hi!</span> I'm 26 years old. I'm a Frontend developer. Currently, I'm a FullStack student in training. I'm constantly seeking improvement, learning, and gaining experience every day.`
     }
  
     isMoved = !isMoved;
}

switchLang.addEventListener('click', () => {
   toggleLanguage();
});




