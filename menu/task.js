const menuLinks = document.querySelectorAll('.menu__link')

for (p = 0; p < menuLinks.length; p++) {
    let menuLink = menuLinks[p];
    let menuSub = menuLink.closest('.menu__item').querySelector('.menu_sub');

    if (menuSub !==null) {
        menuLink.onclick = () => {
            menuSub.classList.toggle('menu_active');
            return false;
        }
    }
}