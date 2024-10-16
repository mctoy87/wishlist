// функция для рендера навигации
import { createElement, scrollController } from './helper.js';
import { createBurgerMenu } from './createBurgerMenu.js';
import { API_URL, JWT_TOKEN_KEY } from './const.js';
import { renderModal } from './renderModal.js';
import { auth, router } from './index.js';

//1.создаем навигу
const nav = document.querySelector('.nav');

// создаем бургер меню
// внутрь передаем nav для функционала открытия/закрытия
createBurgerMenu(nav, 'nav_active', '.nav__btn');

export const renderNavigation = (edit, formProfile) => {
  // очищаем нав
  nav.textContent = '';

  // если передаем параметр edit в renderNavigation
  if (edit) {
    // создаем кнопки через помощники (helper.js)
    const buttonSave = createElement('button', {
      className: 'nav__btn btn',
      textContent: 'Сохранить изменения'
    });

    buttonSave.addEventListener('click', (e)=> {
      e.preventDefault();
      /* с помощью dispatch на форме вызываем событие submit. А само событие submit 
      смотри в createEditProfile => formProfile.addEventListener('submit', (e)...
      bubles - это разрешить всплытие
      */
      formProfile.dispatchEvent(new Event('submit', {bubbles: true}));
    });

    const buttonBack = createElement('button', {
      className: 'nav__btn btn',
      textContent: 'Назад'
    });

    buttonBack.addEventListener('click', ()=> {
      history.back();
    });

    nav.append(buttonSave, buttonBack);
    return;
  }

  // определяем авторизованность пользователя
  if (auth.login) {
    // render smth else
    // создаем кнопки через помощники (helper.js)
    const butttonEditProfile = createElement('button', {
      className: 'nav__btn btn',
      textContent: 'Редактировать профиль'
    });

    butttonEditProfile.addEventListener('click', () => {
      router.setRoute(`/editprofile/${auth.login}`);
      scrollController.enabledScroll();
    });

    const butttonAddWish = createElement('button', {
      className: 'nav__btn btn',
      textContent: 'Добавить желание'
    });

    butttonAddWish.addEventListener('click', () => {
      router.setRoute('/editwish/newwish');
    });

    const butttonLogout = createElement('button', {
      className: 'nav__btn btn',
      textContent: 'Выйти'
    });

    butttonLogout.addEventListener('click', () => {
      localStorage.removeItem(JWT_TOKEN_KEY)
      auth.login = '';
      router.setRoute('/');
    });

    nav.append(butttonEditProfile, butttonAddWish, butttonLogout);
    return;
  };

  // создаем кнопки через помощники (helper.js)
  const butttonSignUp = createElement('button', {
    className: 'nav__btn btn',
    textContent: 'Зарегистрироваться'
  });

  // обработчик события
  butttonSignUp.addEventListener('click', () => {
    renderModal({
      title: 'Регистрация',
      description: 'Введите ваши данные для регистрации на сервисе WishList',
      btnSubmit: 'Зарегистрироваться',
      submitHandler: async (event) => {
        const formData = new FormData(event.target);
        const credentials = {
          login: formData.get('login'),
          password: formData.get('password'),
        };
        console.log('credentials: ', credentials);

        try {
          const response = await fetch(`${API_URL}/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(credentials),
          });

          if (response.ok) {
            const data = await response.json();
            console.log('data: ', data);
            localStorage.setItem(JWT_TOKEN_KEY, data.token);
            auth.login = data.login;
            router.setRoute(`/user/${data.login}`);

            return true;
          } else {
            const {message = 'Неизвестная ошибка'} = await response.json();
            console.log('message: ', message);
            throw new Error(message);
          }
        } catch (error) {
          alert(error.message)
        }
      }
    });
  });

  const butttonLogin = createElement('button', {
    className: 'nav__btn btn',
    textContent: 'Войти'
  });

    // обработчик события
    butttonLogin.addEventListener('click', () => {
      renderModal({
        title: 'Авторизация',
        description: 'Введите ваши данные для входа в личный кабинет',
        btnSubmit: 'Авторизоваться',
        submitHandler: async (event) => {
          const formData = new FormData(event.target);
          const credentials = {
            login: formData.get('login'),
            password: formData.get('password'),
          };
          console.log('credentials: ', credentials);
  
          try {
            const response = await fetch(`${API_URL}/login`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json'},
              body: JSON.stringify(credentials),
            });
  
            if (response.ok) {
              const data = await response.json();
              localStorage.setItem(JWT_TOKEN_KEY, data.token);
              auth.login = data.login;
              router.setRoute(`/user/${data.login}`);
  
              return true;
            } else {
              const {message = 'Неизвестная ошибка'} = await response.json();
              console.log('response: ', await response.json());
              throw new Error(message);
            }
          } catch (error) {
            alert(error.message)
          }
        }
      });
    });

  // вставим кнопки на страницу
  nav.append(butttonSignUp, butttonLogin);
};
