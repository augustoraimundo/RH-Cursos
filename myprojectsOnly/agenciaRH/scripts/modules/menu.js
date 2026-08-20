export default function menu(){
    const hamburguer = document.querySelector('.menu')
    const navigator = document.querySelector('header ul')
    function openMenu(){
        navigator.classList.toggle('activo')
    }

    hamburguer.addEventListener('click', openMenu)
}