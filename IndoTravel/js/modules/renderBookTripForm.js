import { getData } from "./modelData.js";

export const renderData = async () => {
  const data = await getData();

  const element = document.querySelectorAll('.reservation__select-wrapper > select');
  const dateTrip = document.querySelector('#reservation__date');
  const peopleNumber = document.querySelector('#reservation__people');
  const totalAmountElement = document.querySelector('.reservation__price');
    totalAmountElement.textContent = `${0}₽`

  const dates = data.map(i => {
    const option = document.createElement('option');
    option.setAttribute('value', i.date);
    option.append(i.date)
    return option;
  });

  const dateTitle = `<option>Дата путешествия</option>`;
  const pepoleNumber = `<option>Количество человек</option>`;
  
  dateTrip.innerHTML = dateTitle + '';
  dateTrip.append(...dates);

  data.map(i => {
    console.log(i);
  });
  
  let peopleQty = 0; let startDate = 0; let endDate = 0;
  element.forEach(el => {
    el.addEventListener('change', ({target}) => {
      const dateInfo = document.querySelector('.reservation__data');
      
      data.filter(i => {
        const formData = {
          userQty: peopleQty,
          start: startDate,
          end: endDate,
        }
        if(i.date === target.value) {
          peopleNumber.innerHTML = pepoleNumber + '';
          totalAmountElement.textContent = `${0}₽`
 
          startDate = target.value[0] + target.value[1];
          endDate = target.value[8] + target.value[9];

          for (let index = i['min-people']; index <= i['max-people']; index++) {
            const option = document.createElement('option');
            option.setAttribute('value', index);
            option.append(index)
            peopleNumber.append(option);
          }
        }
        if (target.matches('#reservation__people')){
          const sum = target.value * i.price;
          totalAmountElement.textContent = `${sum}₽`
          peopleQty = target.value;
        }
        dateInfo.textContent = `${startDate} ноября - ${endDate} декабря, ${peopleQty} человека`;
      });

    });
  })
  
};