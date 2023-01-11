import { modalTripStyles } from './modelData.js';

const bookTripModal = async (error, data) => {
  await modalTripStyles('css/modal.css');

  console.log(data);
  const overlay = document.createElement('div');
  const modal = document.createElement('div');
  const btnGroup = document.createElement('div');

  const title = document.createElement('h2');
  const description = document.createElement('p');
  const date = document.createElement('p');
  const price = document.createElement('p');

  const accept = document.createElement('button');
  const update = document.createElement('button');

  overlay.classList.add('overlay');
  overlay.classList.add('overlay_confirm');
  modal.classList.add('modal');

  title.classList.add('modal__title');
  title.textContent = 'Подтверждение заявки';
  
  description.classList.add('modal__text');
  description.textContent = `Бронирование путешествия в Индию на ${data.peopleNumber} человек`;
  
  date.classList.add('modal__text')
  date.textContent = `В даты: ${data.date}`;

  price.classList.add('modal__text');
  price.textContent = `Стоимость тура ${data.tripPrice}P`;

  btnGroup.classList.add('modal__button');
  accept.classList.add('modal__btn');
  accept.classList.add('modal__btn_confirm');
  accept.textContent = 'Подтверждаю';
  update.classList.add('modal__btn');
  update.classList.add('modal__btn_edit');
  update.textContent = 'Изменить данные';

  overlay.append(modal);
  modal.append(title, description, date, price, btnGroup);
  btnGroup.append(accept, update);
  document.body.append(overlay);

  return new Promise(resolve => {
    update.addEventListener('click', () => {
      overlay.remove();
      // resolve(false);
      return;
    });
    accept.addEventListener('click', () => {
      overlay.remove();
      resolve(true);
    });
  });

};
export default bookTripModal;