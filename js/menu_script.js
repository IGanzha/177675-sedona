var menu_btn = document.querySelector(".header-nav__menu-btn");

menu_btn.addEventListener("click", function(event) {
  event.preventDefault();
  if (menu_btn.classList.contains("header-nav__menu-btn--closed")) {
    menu_btn.classList.remove("header-nav__menu-btn--closed");
    console.log("класс удален у кнопки");
  } else {
    menu_btn.classList.add("header-nav__menu-btn--closed");
    console.log("класс добавлен кнопке");
  };
})
