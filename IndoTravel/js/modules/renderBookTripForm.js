import { getData } from "./modelData.js";

export const renderData = async () => {
  const data = await getData();

  const element = document.querySelectorAll('.reservation__select-wrapper > select');
  const dateTrip = document.querySelector('#reservation__date');
  const peopleNumber = document.querySelector('#reservation__people');
  const totalAmountElement = document.querySelector('.reservation__price');
    totalAmountElement.textContent = `${0}₽`

  data.map(i => console.log(i))
  
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

  element.forEach(el => {
    el.addEventListener('change', ({target}) => {
      data.filter(i => {
        if(i.date === target.value) {
          peopleNumber.innerHTML = pepoleNumber + '';

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
        }
      });

    });
  })
  
};