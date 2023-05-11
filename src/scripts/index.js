import '../components/pages/index.css'
import renderFooter from './components/renderFooter'
import renderHeader from './components/renderHeader'

//render header and footer
renderFooter()
renderHeader()

let profileEdit = document.querySelector('.profileEdit__container');
let popup = document.querySelector('.popup');
let popupInframe = document.querySelector('.popup__inframe');
let iventItems = document.querySelectorAll('.ivents__item');

//handler for feedback form
function formSubmitHandler(evt) {
    evt.preventDefault();
    console.log('In development...');
}

//listener for feedback form
profileEdit.addEventListener('submit', formSubmitHandler);

//listener for popup with video close
popup.addEventListener('click', (evt) => {
    if (evt.currentTarget !== popupInframe) {
        popup.style.display = 'none';
        popupInframe.src = './imgs/imgs_main/Blackflag.png';
    }
})

//listener for popup with video open
iventItems.forEach((elem) => {
    elem.onclick = () => {
        popupInframe.src = elem.dataset.url;
        popup.style.display = 'flex';
    }
})