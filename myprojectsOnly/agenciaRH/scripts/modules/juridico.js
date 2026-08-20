export default function accordionList(){
    const seeMore = document.querySelector(".seeMore5")
    const task = document.querySelector('.tasks5')
    const remover = document.querySelector('.remover5')

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