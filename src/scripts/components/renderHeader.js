import boizLogo from '../../imgs/logo/boiz_logo.png'
import menuButtonC from '../../imgs/logo/menuButton.jpg'

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

        const menuButton = document.querySelector('.header__button');

        menuButton.addEventListener('click', (e) => {
            e.preventDefault()
            let menuLinks = document.querySelector('.header__links');
            if (menuLinks.style.display == 'flex') {
                menuLinks.style.display = 'none'
            } else {
                menuLinks.style.display = 'flex'
            }
            
        })

}

export default renderHeader