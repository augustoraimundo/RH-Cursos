export default function servicos(){
    const servicos = document.querySelector('.servicos')
    const serviSide = document.querySelector('.serviSide')
    const icon = document.querySelector('.servicos .size-6')


    function openSubMenu(){
        serviSide.classList.toggle('activo')
        icon.classList.toggle('activo')
    }

    servicos.addEventListener('click', openSubMenu)
}