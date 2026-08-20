export default function nextBotao(){
    const btnPrev = document.querySelector('.preview');
    const btnNext = document.querySelector('.next');
    const section = document.querySelector('.cards');

    if(btnNext && btnPrev && section){
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
    }
} 