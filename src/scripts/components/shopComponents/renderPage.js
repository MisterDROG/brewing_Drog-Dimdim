import getDataPH from "./getData";
import renderGoods from './renderGoods'

const renderPage = () => {
    const cartCounter = document.querySelector('.counter')
    cartCounter.textContent = JSON.parse(localStorage.getItem('cart')).length

    getDataPH().then((data) => {
            renderGoods(data);
            })

}

export default renderPage