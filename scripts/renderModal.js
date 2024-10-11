import { createElement, scrollController } from "./helper.js";

export const renderModal = ({
  title,
  description,
  btnSubmit,
  submitHandler,  
}) => {
  const modal = createElement('div', {
    className: 'modal',
  });

  const modalMain = createElement('div', {
    className: 'modal__main',
  });

  const modalTitle = createElement('h2', {
    className: 'modal__title',
    textContent: title,
  });

  const modalDescription = createElement('p', {
    className: 'modal__description',
    textContent: description,
  });

  const modalForm = createElement('form', {
    className: 'modal__form',
  });

  modalForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const itsOk = await submitHandler(e);
    if (itsOk) {
      modal.remove();
    }
  });
    
    const modalField = createElement('fieldset', {
      className:'modal__field',
    });

    const modalLabelLogin = createElement('label', {
      className: 'modal__label',
    });

    const modalInputLogin = createElement('input', {
      className: 'modal__input',
      type: 'text',
      name: 'login',
      placeholder: 'Логин',
      required: true,
    });

    const modalLabelPassword = createElement('label', {
      className: 'modal__label',
    });

    const modalInputPassword = createElement('input', {
      className: 'modal__input',
      type: 'password',
      name: 'password',
      placeholder: 'Пароль',
      required: true,
    });

    const modalSubmitBtn = createElement('button', {
      className: 'modal__btn',
      textContent: btnSubmit,
    });

    const modalCloseBtn = createElement('button', {
      className: 'modal__close',
      innerHTML: `
        <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.5676 20.1826C22.2477 19.8845 21.8246 19.7222 21.3874 19.73C20.9502 19.7377 20.5331 19.9148 20.224 20.224C19.9148 20.5331 19.7377 20.9502 19.73 21.3874C19.7222 21.8246 19.8845 22.2477 20.1826 22.5676L24.6151 27.0001L20.1826 31.4326C20.0168 31.5871 19.8838 31.7734 19.7916 31.9804C19.6994 32.1874 19.6498 32.4108 19.6458 32.6374C19.6418 32.864 19.6835 33.0891 19.7683 33.2992C19.8532 33.5093 19.9795 33.7002 20.1398 33.8604C20.3 34.0207 20.4909 34.147 20.701 34.2319C20.9111 34.3168 21.1362 34.3584 21.3628 34.3544C21.5894 34.3504 21.8128 34.3008 22.0198 34.2086C22.2268 34.1164 22.4131 33.9834 22.5676 33.8176L27.0001 29.3851L31.4326 33.8176C31.7525 34.1157 32.1756 34.278 32.6128 34.2702C33.05 34.2625 33.4671 34.0854 33.7763 33.7763C34.0854 33.4671 34.2625 33.05 34.2702 32.6128C34.278 32.1756 34.1157 31.7525 33.8176 31.4326L29.3851 27.0001L33.8176 22.5676C33.9834 22.4131 34.1164 22.2268 34.2086 22.0198C34.3008 21.8128 34.3504 21.5894 34.3544 21.3628C34.3584 21.1362 34.3168 20.9111 34.2319 20.701C34.147 20.4909 34.0207 20.3 33.8604 20.1398C33.7002 19.9795 33.5093 19.8532 33.2992 19.7683C33.0891 19.6835 32.864 19.6418 32.6374 19.6458C32.4108 19.6498 32.1874 19.6994 31.9804 19.7916C31.7734 19.8838 31.5871 20.0168 31.4326 20.1826L27.0001 24.6151L22.5676 20.1826Z" fill="#365ABA"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M27.1283 2.8125H26.8717C21.6765 2.8125 17.6062 2.8125 14.4293 3.24C11.1803 3.6765 8.61525 4.59 6.6015 6.6015C4.58775 8.61525 3.6765 11.1803 3.24 14.4315C2.8125 17.6062 2.8125 21.6765 2.8125 26.8717V27.1283C2.8125 32.3235 2.8125 36.3937 3.24 39.5708C3.6765 42.8197 4.59 45.3848 6.6015 47.3985C8.61525 49.4123 11.1803 50.3235 14.4315 50.76C17.6062 51.1875 21.6765 51.1875 26.8717 51.1875H27.1283C32.3235 51.1875 36.3937 51.1875 39.5708 50.76C42.8197 50.3235 45.3848 49.41 47.3985 47.3985C49.4123 45.3848 50.3235 42.8198 50.76 39.5685C51.1875 36.3937 51.1875 32.3235 51.1875 27.1283V26.8717C51.1875 21.6765 51.1875 17.6062 50.76 14.4293C50.3235 11.1803 49.41 8.61525 47.3985 6.6015C45.3848 4.58775 42.8198 3.6765 39.5685 3.24C36.3937 2.8125 32.3235 2.8125 27.1283 2.8125ZM8.98875 8.98875C10.2712 7.70625 12.0037 6.9705 14.8815 6.5835C17.8065 6.192 21.6495 6.1875 27 6.1875C32.3505 6.1875 36.1935 6.192 39.1185 6.5835C41.9963 6.9705 43.731 7.7085 45.0135 8.98875C46.2938 10.2712 47.0295 12.0037 47.4165 14.8815C47.808 17.8065 47.8125 21.6495 47.8125 27C47.8125 32.3505 47.808 36.1935 47.4165 39.1185C47.0295 41.9963 46.2915 43.731 45.0112 45.0135C43.7287 46.2938 41.9963 47.0295 39.1185 47.4165C36.1935 47.808 32.3505 47.8125 27 47.8125C21.6495 47.8125 17.8065 47.808 14.8815 47.4165C12.0037 47.0295 10.269 46.2915 8.9865 45.0112C7.70625 43.7287 6.9705 41.9963 6.5835 39.1185C6.192 36.1935 6.1875 32.3505 6.1875 27C6.1875 21.6495 6.192 17.8065 6.5835 14.8815C6.9705 12.0037 7.7085 10.2712 8.98875 8.98875Z" fill="#365ABA"/>
        </svg>
      `,
    });

    modal.addEventListener('click', ({target}) => {
      if (target === modal || target.closest('.modal__close')) {
        modal.remove();
        scrollController.enabledScroll();
      }
    })

    modalLabelLogin.append(modalInputLogin);
    modalLabelPassword.append(modalInputPassword);
    modalField.append(modalLabelLogin, modalLabelPassword);

    modalForm.append(modalField, modalSubmitBtn);
    modalMain.append(modalTitle, modalDescription, modalForm, modalCloseBtn);

    modal.append(modalMain);

    scrollController.disabledScroll();

    document.body.append(modal);
};