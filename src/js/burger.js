const burger = document.querySelector('.burger');
const headerInner = document.querySelector('.header__inner');
const body = document.body;

burger.addEventListener('click', () => {
    headerInner.classList.toggle('header__inner--active')
    burger.classList.toggle('burger--active')
});