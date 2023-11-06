

const techs = document.querySelectorAll('.portfolio__tech')

const techGrid = document.querySelector('.portfolio__tech-grid')

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in')
            return
        }

    })
})

const techDescriptions = {
    html: {
        desc: 'HTML is a base for every website. I have a lot of expirience using HTML to build SEO-optimized and accesible web interfaces.',
        img:"https://cdn-icons-png.flaticon.com/512/919/919827.png",
        title:"HTML"
    },
    css: {
        desc: 'HTML is a base for every website. I have a lot of expirience using HTML to build SEO-optimized and accesible web interfaces.',
        img:"https://cdn-icons-png.flaticon.com/512/919/919826.png",
        title:"CSS"
    },
    js: {
        desc: 'HTML is a base for every website. I have a lot of expirience using HTML to build SEO-optimized and accesible web interfaces.',
        img:"https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
        title:"JavaScript"
    },
    react: {
        desc: 'HTML is a base for every website. I have a lot of expirience using HTML to build SEO-optimized and accesible web interfaces.',
        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
        title:"React"
    },
    node: {
        desc: 'HTML is a base for every website. I have a lot of expirience using HTML to build SEO-optimized and accesible web interfaces.',
        img:"https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png",
        title:"Node.js"
    },
    sql: {
        desc: 'HTML is a base for every website. I have a lot of expirience using HTML to build SEO-optimized and accesible web interfaces.',
        img:"https://cdn-icons-png.flaticon.com/512/4299/4299956.png",
        title:"SQL"
    }
}

techs.forEach(tech => {
    observer.observe(tech)
    tech.addEventListener("click",(e)=>{
        e.stopImmediatePropagation()
        const tech = e.currentTarget.getAttribute('data-tech')
        const modal = document.createElement('div')

        modal.classList.add('modal')
        modal.style.top = e.currentTarget.offsetTop + 'px'
        const topOffset = e.currentTarget.offsetTop
        modal.style.left = e.currentTarget.offsetLeft + 'px'
        const leftOffset = e.currentTarget.offsetLeft
        techGrid.appendChild(modal)
        let width = 90
        let height = 90
        document.body.style.overflow = 'hidden'
        const {desc, img, title} = techDescriptions[tech]
        let closeBtn = null
        setTimeout(()=>{
            modal.innerHTML = `
            <div class="container">
            <div class="modal__content">
            <div class="modal__header">
            <img class="modal__img ${tech === "react" ? "react-logo" : ''}" src="${img}">
                <h2 class="modal__title">${title}</h2>
                <button class="modal__close" data-close="true">&times;</button>
                <p>
                ${desc}
                </p>
            </div>
            </div>
            `
            closeBtn = modal.querySelector('.modal__close')
            closeBtn.addEventListener('click', () => {
                width = 10
                height = 10
                modal.innerHTML = ''
                const interval = setInterval(()=>{
                    if(width === 0){
                        clearInterval(interval)
                 
                    }
                    modal.style.left = `calc(${innerWidth/2}px - ${width/2}%)`
                    modal.style.top = `calc(${scrollY}px + ${innerHeight/2}px - ${height/2}%)`
                    modal.style.width = `${width--}%`
                    modal.style.height = `${height--}vh`
            
                   },5)
                document.body.style.overflow = 'auto'
            })
        },200)
      
      
        const interval = setInterval(()=>{
        if(width === 100){
            clearInterval(interval)
     
        }
        modal.style.left = `calc(${innerWidth/2}px - ${width/2}%)`
        modal.style.top = `calc(${scrollY}px + ${innerHeight/2}px - ${height/2}%)`
        modal.style.width = `${width++}%`
        modal.style.height = `${height++}vh`

       },5)
    
    })
})




