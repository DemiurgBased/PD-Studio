const htmlTag = document.documentElement;
const themeSwitcher = document.querySelector('.theme__wrapper');
const themeSwitcherToggle = document.querySelector('.theme__switcher-toggle')

themeSwitcher.addEventListener('click', () => {
    htmlTag.classList.toggle('darktheme');
    
    if (htmlTag.classList.contains('darktheme')) {
        themeSwitcherToggle.classList.add('theme__switcher-toggle--active')
        htmlTag.style.setProperty('--black', '#ffffff');
        htmlTag.style.setProperty('--white', '#000000');
        htmlTag.style.setProperty('--dark', '#ededed');
        htmlTag.style.setProperty('--light', '#191919');
        htmlTag.style.setProperty('--blue-logo', '#ededed');
    } else {
        themeSwitcherToggle.classList.remove('theme__switcher-toggle--active')
        htmlTag.style.setProperty('--white', '#ffffff');
        htmlTag.style.setProperty('--black', '#000000');
        htmlTag.style.setProperty('--light', '#ededed');
        htmlTag.style.setProperty('--dark', '#191919');
        htmlTag.style.setProperty('--blue-logo', '#362AF0');
    }
    
});