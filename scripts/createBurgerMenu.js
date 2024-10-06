import { createElement } from "./helper.js"

export const createBurgerMenu = (nav, classActive, selectorClose) => {
  //create button burger
  const burger = createElement('button', {
    className: 'header__burger burger',
    innerHTML: '<span class="burger__line"></span>',
  });

  burger.addEventListener('click', () => {
    burger.classList.toggle('burger_active');
    nav.classList.toggle(classActive);
  });

  nav.addEventListener('click', (e) => {
    const target = e.target;
    if (target.closest(selectorClose)) {
      burger.classList.remove('burger_active');
      nav.classList.remove(classActive);
    }
  })

  nav.before(burger);
}
