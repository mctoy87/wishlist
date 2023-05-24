// 5. импорт createHero
import { createHero } from "./createHero.js";

// 4. импорт кнопок
import { renderNavigation } from "./renderNavigation.js";

/*1.получим в переменную приложение*/
const app = document.querySelector('.app');

/*загрузка приложения*/
const handleHomePage = () => {
  /*очищаем app т.к. не знаем что там сейчас зарендерино*/
  app.textContent = '';

  // рендерим навигацию (+мобильная), т.е. бургер меню и кнопки
  renderNavigation();
  // создаем секцию Hero
  const section = createHero();
  // добавляем hero в app
  app.append(section);
};

/*2.инизиализируем приложение*/
const init = () => {
/*3.вызовим загрузку приложения*/
  handleHomePage();
};

init();