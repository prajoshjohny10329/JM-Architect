
const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            console.log(entry);
            entry.target.classList.add('section-show')
        }
        else{
            entry.target.classList.remove('section-show')
        }
    });
})

const hiddenSections = document.querySelectorAll('.section-hidden');
hiddenSections.forEach((el) => observer.observe(el)) 