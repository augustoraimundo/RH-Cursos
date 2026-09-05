export default function accordionList(){
    const seeMore = document.querySelectorAll(".seeMore2")
    const task = document.querySelector('.tasks2')
    const remover = document.querySelector('.remover2')

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