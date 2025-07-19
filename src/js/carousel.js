document.addEventListener('DOMContentLoaded', () => {
    new Swiper('.swiper', {
        loop: true,
        slidesPerView: 2,
        centeredSlides: true,
        spaceBetween: 5,
        navigation: {
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
        },
        });
    });