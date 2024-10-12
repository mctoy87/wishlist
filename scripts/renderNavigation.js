// функция для рендера навигации
import { createElement } from './helper.js';
import { createBurgerMenu } from './createBurgerMenu.js';
import { API_URL, JWT_TOKEN_KEY } from './const.js';
import { renderModal } from './renderModal.js';
import { auth, router } from './index.js';

//1.создаем навигу
const nav = document.querySelector('.nav');

// создаем бургер меню
// внутрь передаем nav для функционала открытия/закрытия
createBurgerMenu(nav, 'nav_active', '.nav__btn');

export const renderNavigation = () => {
  // очищаем нав
  nav.textContent = '';

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
