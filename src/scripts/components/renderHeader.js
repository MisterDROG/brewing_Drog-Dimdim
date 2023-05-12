import boizLogo from '../../imgs/logo/boiz_logo.png'
import menuButtonC from '../../imgs/logo/menuButton.jpg'

//function for render header
const renderHeader = () => {
    const headerContainer = document.querySelector('.header');

    headerContainer.insertAdjacentHTML('beforeend', `
            <div class="header__container">
                <a href="./index.html" target="_self" class="header__img">
                <img class="logo__header" alt="logo BOIZ BREWERY" src="${boizLogo}" />
                </a>
                <a class="header__button"><img class="header__button-image" alt="menuButton" src="${menuButtonC}" /></a>
            </div>
            <nav class="header__links">
                <a href="./index.html" target="_self" class="header__link">Главная</a>
                <a href="./where.html" target="_self" class="header__link">Места</a>
                <a href="./classification.html" target="_self" class="header__link">Пиво</a>
                <a href="./glasses.html" target="_self" class="header__link">Бокалы</a>
                <a href="./shop.html" target="_self" class="header__link">Магазин</a>
            </nav>`)

        //event listeners for mobile menu open/close
        const menuButton = document.querySelector('.header__button');
        const menuLinks = document.querySelector('.header__links');
        menuButton.addEventListener('click', (e) => {
            e.preventDefault()
            if (menuLinks.style.display == 'flex') {
                menuLinks.style.display = 'none'
            } else {
                menuLinks.style.display = 'flex'
            }
        })

        //event listeners for mobile menu open/close (while window resize)
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 720) {
                menuLinks.style.display = 'flex'
            } else if (window.innerWidth < 720) {
                menuLinks.style.display = 'none'
            }
        })
}

export default renderHeader