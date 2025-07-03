const burgerBTN = document.querySelector('.burger-btn');
const headerInner = document.querySelector('.header__inner');
const body = document.body;

burgerBTN.addEventListener('click', () => {
    burgerBTN.classList.toggle('burger-btn-active');
    headerInner.classList.toggle('header__inner-active');
    body.classList.toggle('no-scroll');
})