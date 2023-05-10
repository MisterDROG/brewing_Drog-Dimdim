import '../components/pages/index.css'

let profileEdit = document.querySelector('.profileEdit__container');
let popup = document.querySelector('.popup');
let popupCross = document.querySelector('.popup__cross');
let popupInframe = document.querySelector('.popup__inframe');
let iventItems = document.querySelectorAll('.ivents__item');

const arrInframes = {
    '001': 'https://www.youtube.com/embed/dgQX4LSwpoE',
    '002': 'https://www.youtube.com/embed/Ohl8mZKVTlk',
    '003': 'https://www.youtube.com/embed/t-OkWxKsH_4',
    '004': 'https://www.youtube.com/embed/V9N35ttYWxY',
    '005': 'https://www.youtube.com/embed/XOMp2oexA_Q',
    '006': 'https://www.youtube.com/embed/XOMp2oexA_Q',
};


iventItems.forEach((elem) => {
    elem.onclick = () => {
        console.log(popupInframe.src);
        popupInframe.src = arrInframes[elem.id];
        popup.style.display = 'flex';
    }
})

popup.addEventListener('click', (evt) => {
    if (evt.currentTarget !== popupInframe) {
        popup.style.display = 'none';
        popupInframe.src = './imgs/imgs_main/Blackflag.png';
    }
})

function formSubmitHandler (evt) {
    evt.preventDefault();
    console.log('test');
}

profileEdit.addEventListener('submit', formSubmitHandler);