const htmlTag = document.documentElement;
const theme = document.querySelector('.theme');
const themeToggle = document.querySelector('.theme__toggle-circle')

theme.addEventListener('click', () => {
    htmlTag.classList.toggle('darktheme');

    if (htmlTag.classList.contains('darktheme')) {
        themeToggle.classList.add('theme__toggle-circle--active')
        htmlTag.style.setProperty('--black', '#ffffff');
        htmlTag.style.setProperty('--white', '#000000');
        htmlTag.style.setProperty('--dark', '#ededed');
        htmlTag.style.setProperty('--light', '#191919');
        htmlTag.style.setProperty('--light-logo', '#ffffff');
    } else {
        themeToggle.classList.remove('theme__toggle-circle--active')
        htmlTag.style.setProperty('--white', '#ffffff');
        htmlTag.style.setProperty('--black', '#000000');
        htmlTag.style.setProperty('--light', '#ededed');
        htmlTag.style.setProperty('--dark', '#191919');
        htmlTag.style.setProperty('--light-logo', '#362AF0');
    }
})

