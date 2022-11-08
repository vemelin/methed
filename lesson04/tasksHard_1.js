'use strict';
{
  const income = +prompt("Введите зарплату", "");
  let result = 0;
  switch (true) {
    case income <= 15000:
      result = income * 0.13;
      console.log(`13% на доход до 15 000 ₽: ${result})`);
      break;
    case income >= 15000 && income <= 50000:
      result = income * 0.2;
      console.log(`20% на доход от 15 000 ₽ до 50 000 ₽: ${result})`);
      break;
    case income > 50000:
      result = income * 0.3;
      console.log(`30% на доход выше 50 000 ₽: ${result})`);
      break;
    default:
      break;
  }
}