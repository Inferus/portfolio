

const techs = document.querySelectorAll('.portfolio__tech')

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in')
            return
        }

    })
})

techs.forEach(tech => {
    observer.observe(tech)
})

const lol = 1;
