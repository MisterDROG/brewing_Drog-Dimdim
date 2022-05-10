const page = document.querySelector(".page");
const header = page.querySelector(".header");
const headerBurger = header.querySelector(".header__burger");
const headerSpan = header.querySelector(".header__span");

/* функция открытия меню-бургера */
const headerMenu = header.querySelector(".header__menu");
headerBurger.addEventListener('click', function() {
  headerBurger.classList.toggle("header__burger_active");
  headerSpan.classList.toggle("header__span_active");
  headerMenu.classList.toggle("header__menu_active");
  page.classList.toggle("page_active");
});