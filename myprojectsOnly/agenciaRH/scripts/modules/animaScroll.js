export default function animaScroll(){
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
}