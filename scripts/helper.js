
export const createElement = (tagName, attribute) => {
  const elem = document.createElement(tagName);
  // передаем элементу атрибуты. Атрибут - это объект, поэтому for...in
  
  //1ый вариант - сложнее выглядит
  // for (const key in attribute) {
    //проверяет что ключ существует - как защита
    // if (Object.hasOwnProperty.call(object, key)) {
      // elem.setAttribute(key, attribute[key])
    // }
  // }

  // 2вариант - проще выглядит
  // передаем объекту все атрибуты, которые есть
  Object.assign(elem, attribute)
  return elem;
};

export const scrollController = {
  scrollPosition: 0,
  disabledScroll() {
    scrollController.scrollPosition = window.scrollY;
    document.body.style.cssText = `
      overflow: hidden;
      position: fixed;
      top: -${scrollController.scrollPosition}px;
      left: 0;
      height: 100vh;
      width: 100vw;
      padding-right: ${window.innerWidth - document.body.offsetWidth}px
    `;
    document.documentElement.style.scrollBehavior = 'unset';
  },
  enabledScroll() {
    document.body.style.cssText = '';
    window.scroll({top: scrollController.scrollPosition})
    document.documentElement.style.scrollBehavior = '';
  },
};

export const plualizeYears = (age) => {
  let years = age % 100;

  if (years >= 11 && years <= 19) {
    return 'лет';
  } else {
    let lastDigit = years % 10;
    if (lastDigit === 1) {
      return 'год';
    } else if (lastDigit >= 2 && lastDigit <= 4) {
      return 'года';
    } else {
      return 'лет';
    }
  }
}