//Select element function

const selectElement = function(element){
    return document.querySelector(element);
}
let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', function(){
    body.classList.toggle('open');
});

// Scroll reveal

window.sr = ScrollReveal();

sr.reveal('.animate-left',{
    origin: 'left',
    direction: 1000,
    distance: '25rem',
    delay:600
});

sr.reveal('.animate-right',{
    origin: 'right',
    direction: 1000,
    distance: '25rem',
    delay:600
});

sr.reveal('.animate-top',{
    origin: 'top',
    direction: 1000,
    distance: '25rem',
    delay:600
});

sr.reveal('.animate-bottom',{
    origin: 'bottom',
    direction: 1000,
    distance: '25rem',
    delay:600
});