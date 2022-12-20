import { getData } from "./modelData.js";

export const renderData = async () => {
  const data = await getData();

  const element = document.querySelectorAll('select');
  const selector = document.querySelectorAll('select');
  const peopleNumber = document.querySelector('#reservation__people');
  const tourPeople = document.querySelector('#tour__people');
  const totalAmountElement = document.querySelector('.reservation__price');
    totalAmountElement.textContent = `${0}₽`

  const dateInfo = document.querySelector('.reservation__data');
    dateInfo.textContent = `Выберите дату`;

  // const dates = data.map(i => {
  //   const option = document.createElement('option');
  //   option.setAttribute('value', i.date);
  //   option.append(i.date)
  //   return option;
  // });
  const dates = () => (data.map(i => {
      const option = document.createElement('option');
      option.append(i.date)
      return option;
    })
  );

  const dateText = ['<option>Выберите дату</option>', '<option>Дата путешествия</option>'];
  const qtyText = 'Количество человек';

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

  //Pull data & Scrolll Down
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
    el.insertAdjacentHTML('afterbegin', `<option selected>${txt}</option>`);
  };
  
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