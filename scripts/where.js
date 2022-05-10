function changeItem() {
    document.getElementById('intro__text_es').style.opacity = '1';
    document.getElementById('intro__text_rus').style.opacity = '0';
  }// функция, которая сработает при наведении.
  //она означает - выбрать элемент к Id у которого надо что-то изменить.
  // когда в скобки где написано one-two добавите Id своего элемента
  function rechangeItem() {
    document.getElementById('intro__text_es').style.opacity = '0';
    document.getElementById('intro__text_rus').style.opacity = '1';
  }// тут всё также. но наобарот. протсес происходящий про отводе курсора.


  /*
  function changeItem() {
    document.getElementById('intro__text_rus').style.opacity = '1';
  }// функция, которая сработает при наведении.
  //она означает - выбрать элемент к Id у которого надо что-то изменить.
  // когда в скобки где написано one-two добавите Id своего элемента
  function rechangeItem() {
    document.getElementById('intro__text_rus').style.opacity = '0';
  }// тут всё также. но наобарот. протсес происходящий про отводе курсора.

  function changeItem() {
    document.getElementById('intro__text_en').style.opacity = '1';
  }// функция, которая сработает при наведении.
  //она означает - выбрать элемент к Id у которого надо что-то изменить.
  // когда в скобки где написано one-two добавите Id своего элемента
  function rechangeItem() {
    document.getElementById('intro__text_en').style.opacity = '0';
  }// тут всё также. но наобарот. протсес происходящий про отводе курсора.


  */

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
    document.getElementById('intro__language_es').style.backgroundColor = 'rgb(230, 228, 222)';
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
    document.getElementById('intro__language_rus').style.backgroundColor = 'rgb(230, 228, 222)';
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
    document.getElementById('intro__language_en').style.backgroundColor = 'rgb(230, 228, 222)';
    document.getElementById('intro__language_en').style.zIndex = '2';
    document.getElementById('intro__language_en').style.color = '#000';
  }