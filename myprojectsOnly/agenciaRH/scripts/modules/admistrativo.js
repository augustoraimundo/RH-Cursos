export default function accordionList(){
    const seeMore = document.querySelector(".seeMore7")
    const task = document.querySelector('.tasks7')
    const remover = document.querySelector('.remover7')

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