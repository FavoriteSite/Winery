// переход к разделам меню
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
   for (let i = 0; i < menuLinks.length; i++) {
      const menuLink = menuLinks[i];
      menuLink.addEventListener('click', menuClick);
   };


   function menuClick(e) {
      const menuLink2 = e.target;
      if (menuLink2.dataset.goto && document.querySelector(menuLink2.dataset.goto)) {
         const block = document.querySelector(menuLink2.dataset.goto);
         const gotoBlockValue = block.getBoundingClientRect().top + window.pageYOffset;

         window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
         });
         e.preventDefault();
      }
   }
}


// переход к разделам меню
const menuBut = document.querySelectorAll('.button__item[data-goto]');
if (menuBut.length > 0) {
   for (let i = 0; i < menuBut.length; i++) {
      const but = menuBut[i];
      but.addEventListener('click', menuClick);
   };


   function menuClick(e) {
      const button = e.target;
      if (button.dataset.goto && document.querySelector(button.dataset.goto)) {
         const block = document.querySelector(button.dataset.goto);
         const gotoBlockValue = block.getBoundingClientRect().top + window.pageYOffset;

         window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
         });
         e.preventDefault();
      }
   }
}


// получаем форму по имени
const mainForm = document.forms.main;


// отмена фокусировки при нажатии
const focus = document.querySelectorAll('.degustazione-form__input[data-focus]');
if (focus.length > 0) {
   for (let i = 0; i < focus.length; i++) {
      const inputNum = focus[i];
      const inputPlasceholder = inputNum.placeholder;
      inputNum.addEventListener('focus', function (e) {
         inputNum.placeholder = "";
      });
      inputNum.addEventListener('blur', function (e) {
         inputNum.placeholder = inputPlasceholder;
      });
   };
}


//проверка валидации формы

const nameInput = mainForm.nameInput;
const nameInputTel = mainForm.nameInputTel;

// *получаем  поле для вывода ошибки
const error = document.querySelector('.error');


mainForm.addEventListener('submit', function (event) {
   event.preventDefault();
   let nameInputValue = nameInput.value;
   let nameInputTelValue = nameInputTel.value;
   let file = "";


   if (nameInputValue == "" || nameInputTelValue == "") {
      file = "Заполните все поля";
   } else if (nameInputValue.length <= 1) {
      file = "Введите корректные данные";
   } else if (nameInputTelValue.length <= 12) {
      file = "Не менее 12 символов в формате: +7 9040981790";
   }

   if (file != "") {
      error.innerHTML = file;
   }
   else {
      window.location = 'https://translate.yandex.ru/?lang=en-ru&text=autocomplete';
   }

});
