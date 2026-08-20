export default function accordionList(){
    const seeMore = document.querySelector(".seeMore4")
    const task = document.querySelector('.tasks4')
    const remover = document.querySelector('.remover4')

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