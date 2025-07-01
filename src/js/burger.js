const burgerBTN = document.querySelector('.burger-btn');
const headerInner = document.querySelector('.header__inner');

burgerBTN.addEventListener('click', () => {
    burgerBTN.classList.toggle('burger-btn-active');
    headerInner.classList.toggle('header__inner-active')
})