const list = document.querySelectorAll('dt')
      list[0].nextElementSibling.classList.add('activo')
      list[0].classList.add('activo')

    function mostreLista(){
        this.nextElementSibling.classList.toggle('activo')
        this.classList.toggle('activo')

       const icon = this.querySelector('.df')
        if(icon){
            icon.classList.toggle('activo')
    }
  }
    list.forEach(element => {
        element.addEventListener('click', mostreLista)
  });

