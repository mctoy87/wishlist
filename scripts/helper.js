
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
}