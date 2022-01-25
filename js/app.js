const logo = document.querySelector('.logo');
const navbar =  document.querySelector('.navbar');
const search  = document.querySelector('.fa-search');
const overlay = document.querySelector('.overlay');
const searchFeild =  document.querySelector('.search_box');
const testimonial_main =  document.querySelectorAll('.testimonial_main');
const prev =  document.querySelector('.fa-chevron-left');
const next =  document.querySelector('.fa-chevron-right');


//track current data 
let current = 0;

window.addEventListener('scroll', () =>{
    navbar.classList.toggle('bgcolor', window.scrollY > 0);
})


search.addEventListener('click', () =>{
    overlay.classList.add('show');
    searchFeild.classList.add('show')
})

overlay.addEventListener('click', () =>{
    overlay.classList.remove('show');
    searchFeild.classList.remove('show')
})

const changeSlider = () =>{
    testimonial_main.forEach((slide, index) =>{
        if(slide.classList.contains('active')) current = index
    })
    testimonial_main[current].classList.remove('active');
    if(current === (testimonial_main.length -1)) testimonial_main[0].classList.add('active');
    else testimonial_main[current + 1].classList.add('active')
}


let interval = setInterval(changeSlider, 3000)

prev.addEventListener('click', () =>{
    clearInterval(interval)
    testimonial_main[current].classList.remove('active')

    if(current === 0) {
        testimonial_main[testimonial_main.length - 1].classList.add('active')
        current = testimonial_main.length - 1
    }
    else {
        testimonial_main[current - 1].classList.add('active')
        current = current - 1
    }
    interval = setInterval(changeSlider, 5000)
})


next.addEventListener('click', () =>{
    clearInterval(interval)
    testimonial_main[current].classList.remove('active')

    if(current === (testimonial_main.length - 1)) {
        testimonial_main[0].classList.add('active')
        current = 0
    }
    else {
        testimonial_main[current + 1].classList.add('active')
        current = current + 1
    }
    interval = setInterval(changeSlider, 5000)
})