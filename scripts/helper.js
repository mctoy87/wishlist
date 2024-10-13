
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

export const handleImageFileSelection = (input, image) => {
  
  // !todo
};

export const createSelectDate = (selectDay, selectMonth, selectYear, birthdate) => {
  for (let day = 0;  day <= 31; day++) {
    const option = document.createElement('option');
    option.value = day ? day : '';
    option.text = day ? day : '';
    selectDay.append(option);
  }

  const months = [
    'Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек',
  ];

  for (let i = 0; i < months.length; i++) {
    const option = document.createElement('option');
    option.value = i;
    option.text = months[i];
    selectMonth.append(option);
  }

  const currentYear = new Date().getFullYear();

  const optionYear = document.createElement('option');
  optionYear.value = '';
  optionYear.text = '';
  selectYear.append(optionYear);

  for (let year = currentYear; year >= currentYear - 100; year --) {
    const option = document.createElement('option');
    option.value = year;
    option.text = year;
    selectYear.append(option);
  }

  if (birthdate) {
    const [day, month, year] = birthdate.split('/');

    selectDay.value = day;
    selectMonth.value = month;
    selectYear.value = year;
  }

  [selectDay, selectMonth, selectYear].forEach(dateSelect => {
    dateSelect.addEventListener('change', ({currentTarget}) => {
      currentTarget.blur();
    });
  });

};
