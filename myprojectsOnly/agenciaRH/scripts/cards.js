const btnPrev = document.querySelector('.preview');
const btnNext = document.querySelector('.next');
const section = document.querySelector('.cards');

  const scrollAmount = 300; 

  btnNext.addEventListener('click', () => {
    section.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  });

  btnPrev.addEventListener('click', () => {
    section.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  });

// menu

const hamburguer = document.querySelector('.menu')
const navigator = document.querySelector('header ul')

function openMenu(){
    navigator.classList.toggle('activo')
}

hamburguer.addEventListener('click', openMenu)

//servicos

const servicos = document.querySelector('.servicos')
const serviSide = document.querySelector('.serviSide')
const icon = document.querySelector('.servicos .size-6')


function openSubMenu(){
    serviSide.classList.toggle('activo')
    icon.classList.toggle('activo')
}

servicos.addEventListener('click', openSubMenu)

// animaScroll

const scrolling = document.querySelectorAll('.scrolling')
const topping = window.innerHeight * 0.6

function hendleScroll(){
    scrolling.forEach((elemento) =>{
    const topar = elemento.getBoundingClientRect().top - topping

    if(topar < 0){
        elemento.classList.add('activo')
    }else{
        elemento.classList.remove('activo')
    }
})
}
window.addEventListener('scroll', hendleScroll)

// dierencias

const directions = document.querySelectorAll('dt')
directions[0].nextElementSibling.classList.add('activo')
directions[0].classList.add('activo')

function mostreDiferencias(){
    this.nextElementSibling.classList.toggle('activo')
    this.classList.toggle('activo')
}

directions.forEach((element) =>{
    element.addEventListener('click', mostreDiferencias)
})