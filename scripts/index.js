// 5. импорт createHero
import { JWT_TOKEN_KEY } from "./const.js";
import { createHero } from "./createHero.js";
import { createWishlist } from "./createWishlist.js";
import { getLogin } from "./getLogin.js";

// 4. импорт кнопок
import { renderNavigation } from "./renderNavigation.js";

// 7. Создаем с помощью библ director роутер, отвечающий за все действия
export const router = Router();
const token = localStorage.getItem(JWT_TOKEN_KEY);
export const auth = token ? await getLogin(token) : {};

/*1.получим в переменную приложение*/
const app = document.querySelector('.app');

const handleEditPageRoute = (id) => {

};

const handleEditProfileRoute = (login) => {

};

const handleUserRoute = async (login) => {
  app.textContent = '';
  renderNavigation();
  app.append(await createWishlist(login));
};

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
  let isMainPage = true;
// 8. навешиваем роуты из библиотеки director на главную страницу, вызовим загрузку приложения
  router.on('/', handleHomePage);
  router.on('/editwish/newwish', handleEditPageRoute); //создать желание
  router.on('/editwish/:id', handleEditPageRoute); //редактировать желание
  router.on('/editprofile/:login', handleEditProfileRoute); //редактировать профиль
  router.on('/user/:login', handleUserRoute); //открывать страницу с желаниями
  router.init();

  if (isMainPage) {
    isMainPage = false;

    if (auth.login) {
      router.setRoute(`/user/${auth.login}`);
    } else {
      router.setRoute('/');
    }
  }

/*3.вызовим загрузку приложения*/
  // handleHomePage();
};

init();