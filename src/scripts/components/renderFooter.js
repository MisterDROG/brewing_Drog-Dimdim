import VKLogo from '../../imgs/logo/logo_social/vk.png'
import TelegramLogo from '../../imgs/logo/logo_social/Telegram.png'

const renderFooter = () => {
    const footerContainer = document.querySelector('.footer');

    footerContainer.insertAdjacentHTML('beforeend', `
        <a href="./index.html" target="_blank" class="footer__author">&copy; BOIZ Brewery</a>
        <div class="footer__columns">
            <nav class="footer__column">
                <p class="footer__title">Контакты</p>
                <a href="./index.html" target="_blank" class="footer__link"><img src="${TelegramLogo}"
                    class="footer__link_img" alt="telegram" />Telegram</a>
                <a href="./index.html" target="_blank" class="footer__link"><img src="${VKLogo}"
                    class="footer__link_img" alt="VK" />VKontakte</a>
                <a href="./index.html" target="_blank" class="footer__link"><img src="${VKLogo}"
                    class="footer__link_img" alt="VK" />VK Public</a>
            </nav>
            <nav class="footer__column">
                <p class="footer__title">Навигация</p>
                <a href="./index.html" target="_blank" class="footer__link">Главная</a>
                <a href="./where.html" target="_blank" class="footer__link">Куда пойти</a>
                <a href="./shop.html" target="_blank" class="footer__link">Магазин</a>
            </nav>
        </div>`)

}

export default renderFooter