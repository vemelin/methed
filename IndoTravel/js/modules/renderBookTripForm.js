// import { getData } from "./modelData.js";
import { fetchRequest, getData } from './modelData.js';
const url = 'https://discreet-exuberant-canidae.glitch.me/api/goods/';
const urlPost = 'https://jsonplaceholder.typicode.com/posts/';

export const renderData = async () => {
  const data = await getData();

  // Selectors
  const element = document.querySelectorAll('select');
  const selector = document.querySelectorAll('select');
  const peopleNumber = document.querySelector('#reservation__people');
  const tourPeople = document.querySelector('#tour__people');
  const totalAmountElement = document.querySelector('.reservation__price');
    totalAmountElement.textContent = `${0}₽`

  const dateInfo = document.querySelector('.reservation__data');
    dateInfo.textContent = `Выберите дату`;

  // Preload dates
  const dates = () => (data.map(i => {
      const option = document.createElement('option');
      option.append(i.date)
      return option;
    })
  );

  const dateText = ['<option>Выберите дату</option>', '<option>Дата путешествия</option>'];
  const qtyText = 'Количество человек';

  // Render selectors with preloaded dates
  selector.forEach(el => {
    if (el.matches('#tour__date')) {
      el.innerHTML = dateText[0] + '';
      el.append(...dates());
    }
    if (el.matches('#reservation__date')) {
      el.innerHTML = dateText[1] + '';
      el.append(...dates());
    }
  });
  
  let peopleQty = 0; let startDate = 0; let endDate = 0;

  // Pull data & Scroll Down
  const tourBtn = document.querySelector('.tour__button');
  tourBtn.addEventListener('click', e => {
    e.preventDefault();
    document.getElementById('reservation').scrollIntoView();
  });

  // Render selectors
  const execute = (target, el, txt, i) => {
    el.innerHTML = '';
    totalAmountElement.textContent = `${0}₽`
    startDate = target.value[0] + target.value[1];
    endDate = target.value[8] + target.value[9];

    for (let index = i['min-people']; index <= i['max-people']; index++) {
      const option = (index) => {
        const option = document.createElement('option');
        option.setAttribute('value', index);
        option.append(index);
        return option;
      };
      el.append(option(index));
    }
    el.insertAdjacentHTML('afterbegin', `<option selected value="0">${txt}</option>`);
  };
  
  // Reflect Changes when select # of people
  element.forEach(el => {
    el.addEventListener('change', ({target}) => {
      data.filter(i => {
        if (target.matches('#tour__date') && i.date === target.value)
          execute(target, tourPeople, qtyText, i);
        if (target.matches('#reservation__date') && i.date === target.value)
          execute(target, peopleNumber, qtyText, i)
        if (target.matches('#reservation__people') || target.matches('#tour__people')){
          const sum = target.value * i.price;
          totalAmountElement.textContent = `${sum}₽`
          peopleQty = target.value;
        }
        dateInfo.textContent = `${startDate} ноября - ${endDate} декабря, ${peopleQty} человека`;
      });

    });
  })
  
};

// Send Data: Trip Tour Form
const form = document.querySelectorAll('form');
form.forEach(el => {
  if (el.classList.contains('reservation__form')) {
    el.addEventListener('submit', e => {
      e.preventDefault();

      const formData = new FormData(e.target);
      // const form = Object.fromEntries(formData);
      el.reset();

      fetchRequest(urlPost, {
        method: 'POST',
        body: {
          date: formData.get('dates'),
          peopleNumber: formData.get('people'),
          fullName: formData.get('fullName'),
          phoneNumber: formData.get('phoneNumber'),
          totalPrice: +document.querySelector('.reservation__price').textContent.slice(0, -1),
        },
        callback: (err, data) => {
          if (err) {
            console.warn(err, data);
            form.textContent = err;
          }
          form.textContent = `Request successfully sent, ID# is ${data.id}`;
          const p = document.createElement('p');
          p.textContent = `Спасибо, ваша заявка ${data.id} обрабатывается`;
          el.append(p);
          const tick = setInterval(() => {
            p.remove();
            clearInterval(tick)
          }, 3000)
        },
        headers: {
          'Content-Type': 'application/json',
        }
      });
    });
  }
  if (el.classList.contains('footer__form')) {
    el.addEventListener('submit', e => {
      e.preventDefault();

      const formData = new FormData(e.target);

      fetchRequest(urlPost, {
        method: 'POST',
        body: {
          email: formData.get('email'),
        },
        callback: (err, data) => {
          if (err) {
            console.warn(err, data);
            form.textContent = err;
          }
          const h2 = document.querySelector('.footer__title.footer__form-title');
          const p = document.querySelector('.footer__text');
          const emailField = document.querySelector('.footer__input-wrap');
          h2.textContent = `Ваша заявка успешно отправлена`;
          p.textContent = `Наши менеджеры свяжутся с вами в течении 3-х рабочих дней`;
          emailField.remove();
          const tick = setInterval(() => {
            h2.textContent = `Есть вопросы по туру?`;
            p.textContent = `Введите свой Email и мы свяжемся с вами в течении 3 рабочих дней`;
            el.append(emailField);
            clearInterval(tick)
          }, 5000)
        },
        headers: {
          'Content-Type': 'application/json',
        }
      });
    });
  }
});