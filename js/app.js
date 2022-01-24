const logo = document.querySelector('.logo');
const navbar =  document.querySelector('.navbar');
const search  = document.querySelector('.fa-search');
const overlay = document.querySelector('.overlay');
const searchFeild =  document.querySelector('.search_box');


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