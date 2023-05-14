import getDataPH from "./getData";
import renderGoods from './renderGoods'

const renderPage = () => {
    const cartCounter = document.querySelector('.counter')
    if (JSON.parse(localStorage.getItem('cart')) !== null) {
        cartCounter.textContent = JSON.parse(localStorage.getItem('cart')).length
    } else {
        cartCounter.textContent = 0
    }

    getDataPH().then((data) => {
            renderGoods(data);
            })

}

export default renderPage