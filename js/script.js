// var submit_btn = document.querySelector(".btn--send-feedback");
var popup_success = document.querySelector(".popup--success");
var popup_failure = document.querySelector(".popup--failure");
var popup_close_btn_success = document.querySelector(".popup__btn--success");
var popup_close_btn_failure = document.querySelector(".popup__btn--failure");
var feedback_form = document.querySelector(".feedback-form");
var form_firstname = document.querySelector("#first-name");
var form_lastname = document.querySelector("#last-name");
var form_phone = document.querySelector("#phone");
var form_email = document.querySelector("#email");

feedback_form.addEventListener("submit", function(event) {
  if (!form_firstname.value || !form_lastname.value || !form_phone.value || !form_email.value) {
    event.preventDefault();
    popup_failure.classList.remove("show-popup");
    console.log("класс show-popup удален у провального попапа");
    popup_failure.offsetWidth = popup_failure.offsetWidth;
    popup_failure.classList.add("show-popup");
    console.log("класс show-popup добавлен провальному попапу");
  } else {
    popup_success.classList.remove("show-popup");
    console.log("класс show-popup удален у успешного попапа");
    popup_success.offsetWidth = popup_success.offsetWidth;
    popup_success.classList.add("show-popup");
    console.log("класс show-popup добавлен успешному попапу");
  }
});

popup_close_btn_success.addEventListener("click", function(event) {
  event.preventDefault();
  popup_success.classList.remove("show-popup");
});

popup_close_btn_failure.addEventListener("click", function(event) {
  event.preventDefault();
  popup_failure.classList.remove("show-popup");
});
