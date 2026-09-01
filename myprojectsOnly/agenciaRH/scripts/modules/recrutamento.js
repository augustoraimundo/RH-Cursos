export default function accordionList(){
    const seeMore = document.querySelectorAll(".seeMore3")
    const task = document.querySelector('.tasks3')
    const remover = document.querySelector('.remover3')

    if(seeMore && task && remover){
        
        function mostreTask(){
            task.classList.add('activo')
        }

        function removerTask(){
            task.classList.remove('activo')
        }


        // seeMore.addEventListener('click', mostreTask)
        seeMore.forEach((element) =>{
            element.addEventListener('click', mostreTask)
        })
        remover.addEventListener('click', removerTask)
    }
}