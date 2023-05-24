// функция для рендера навигации

import { createElement } from './helper.js';

//1.создаем навигу
const nav = document.querySelector('.nav');

// создаем бургер меню
// внутрь передаем nav для функционала открытия/закрытия
// const burger = createBurgerMenu(nav);

export const renderNavigation = () => {
  // очищаем нав
  nav.textContent = '';

  // <button class="nav__btn btn">Зарегистрироваться</button>
  // <button class="nav__btn btn">Войти</button>

  // создаем кнопки через помощники (helper.js)
  const butttonSignUp = createElement('button', {
    className: 'nav__btn btn',
    textContent: 'Зарегистрироваться'
  });

  // обработчик события
  butttonSignUp.addEventListener('click', () => {
    console.log('Зарегистрироваться');
  });

  const butttonLogin = createElement('button', {
    className: 'nav__btn btn',
    textContent: 'Войти'
  });

    // обработчик события
    butttonLogin.addEventListener('click', () => {
      console.log('Войти');
    });

  // вставим кнопки на страницу
  nav.append(butttonSignUp, butttonLogin);
};
