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


// slick slider
$(".your-class").slick({
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: {
      delay: 3000,
    },
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  });
  
