import '../components/pages/where.css'

import renderFooter from './components/renderFooter'
import renderHeader from './components/renderHeader'

//render header and footer
renderFooter()
renderHeader()

// functions for language switch of the quote
function text_es() {
  document.getElementById('intro__text_rus').style.display = 'none';
  document.getElementById('intro__text_en').style.display = 'none';
  document.getElementById('intro__text_es').style.display = 'block';
  document.getElementById('intro__language_rus').style.backgroundColor = 'grey';
  document.getElementById('intro__language_rus').style.zIndex = '0';
  document.getElementById('intro__language_rus').style.color = '#ffffff';
  document.getElementById('intro__language_en').style.backgroundColor = 'grey';
  document.getElementById('intro__language_en').style.zIndex = '0';
  document.getElementById('intro__language_en').style.color = '#ffffff';
  document.getElementById('intro__language_es').style.backgroundColor = '#f7f2d6';
  document.getElementById('intro__language_es').style.zIndex = '2';
  document.getElementById('intro__language_es').style.color = '#000';
}

function text_rus() {
  document.getElementById('intro__text_en').style.display = 'none';
  document.getElementById('intro__text_es').style.display = 'none';
  document.getElementById('intro__text_rus').style.display = 'block';
  document.getElementById('intro__language_es').style.backgroundColor = 'grey';
  document.getElementById('intro__language_es').style.zIndex = '0';
  document.getElementById('intro__language_es').style.color = '#ffffff';
  document.getElementById('intro__language_en').style.backgroundColor = 'grey';
  document.getElementById('intro__language_en').style.zIndex = '0';
  document.getElementById('intro__language_en').style.color = '#ffffff';
  document.getElementById('intro__language_rus').style.backgroundColor = '#f7f2d6';
  document.getElementById('intro__language_rus').style.zIndex = '2';
  document.getElementById('intro__language_rus').style.color = '#000';
}

function text_en() {
  document.getElementById('intro__text_rus').style.display = 'none';
  document.getElementById('intro__text_es').style.display = 'none';
  document.getElementById('intro__text_en').style.display = 'block';
  document.getElementById('intro__language_rus').style.backgroundColor = 'grey';
  document.getElementById('intro__language_rus').style.zIndex = '0';
  document.getElementById('intro__language_rus').style.color = '#ffffff';
  document.getElementById('intro__language_es').style.backgroundColor = 'grey';
  document.getElementById('intro__language_es').style.zIndex = '0';
  document.getElementById('intro__language_es').style.color = '#ffffff';
  document.getElementById('intro__language_en').style.backgroundColor = '#f7f2d6';
  document.getElementById('intro__language_en').style.zIndex = '2';
  document.getElementById('intro__language_en').style.color = '#000';
}

const textES = document.querySelector('.intro__language_es')
textES.addEventListener('click', () => {
    text_es()
})

const textRU = document.querySelector('.intro__language_rus')
textRU.addEventListener('click', () => {
    text_rus()
})

const textEN = document.querySelector('.intro__language_en')
textEN.addEventListener('click', () => {
    text_en()
})