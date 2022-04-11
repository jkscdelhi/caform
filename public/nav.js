const hamMenuBtn = document.querySelector('.ham-menu');
const goBack = document.querySelector('.nav-mobile-icon');
const navWrapperMobile = document.querySelector('.nav-wrapper-mobile');

hamMenuBtn.addEventListener('click',function(){
    navWrapperMobile.classList.toggle('show');
})

goBack.addEventListener('click',function(){
    navWrapperMobile.classList.toggle('show');
})



