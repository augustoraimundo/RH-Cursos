export default function accordionList(){
    const seeMore = document.querySelectorAll(".seeMore")
    const task = document.querySelector('.tasks')
    const remover = document.querySelector('.remover')

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