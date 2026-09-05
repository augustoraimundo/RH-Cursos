export default function accordionList(){
    const seeMore = document.querySelector(".seeMore6")
    const task = document.querySelector('.tasks6')
    const remover = document.querySelector('.remover6')

    if(seeMore && task && remover){
        
        function mostreTask(){
            task.classList.add('activo')
        }

        function removerTask(){
            task.classList.remove('activo')
        }


        seeMore.addEventListener('click', mostreTask)
        remover.addEventListener('click', removerTask)
    }
}