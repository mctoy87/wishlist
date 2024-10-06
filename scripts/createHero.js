import { createElement } from "./helper.js"

export const createHero = () => {
  //1. создаем секцию
  const section = createElement('section', {
    className: 'hero'
  });
  //2. создаем контейнер
  const container = createElement('div', {
    className: 'container hero__container'
  });
  //3. вставим на страницу секцию
  section.append(container);
  //4. создадим h1
  const title = createElement('h1', {
    className: 'hero__title',
    innerHTML: '<span>Wish</span><span>List</span>'
  });
  //4. создадим p
  const description = createElement('p', {
    className: 'hero__description',
    //innerHtml вместо TextContent т.к. внутри текста есть спецсимволы
    innerHtml: 'Никогда не&nbsp;поздно поставить новую цель или обрести новую мечту...'
  });
  //5.создаем ol
  const listSteps = createElement('ol', {
    className: 'hero__steps steps',
  });

// 6.ассивом создаем 3 итема в списке
  [
    'создайте список желаний',
    'Поделитесь ссылкой с&nbsp;друзьями',
    'Получите желанный подарок',
  ].forEach(text => {
    const step = createElement('li', {
      className: 'steps__item',
      //innerHtml вместо TextContent т.к. внутри текста есть спецсимволы
      innerHTML: text,
    });

    listSteps.append(step);
  });
// вставим в верстку в контейнер все три элемента
  container.append(title, description, listSteps);

  return section;
  
}


{/* <div class="container hero__container">


  <ol class="hero__steps steps">
    <li class="steps__item">создайте список желаний</li>
    <li class="steps__item">Поделитесь ссылкой с&nbsp;друзьями</li>
    <li class="steps__item">Получите желанный подарок</li>
  </ol>
</div> */}