'use strict';
{
  const name = "iPhone 12 Pro",
    quantity = 5,
    category = "mobile phone",
    price = 750;
}

{
  const name = prompt("Наименование товара?", ""),
    quantity = +prompt("Количество товара?", ""),
    category = prompt("Категория товара?", ""),
    price = +prompt("Цена товара?", ""),
    sum = quantity * price;

  if (Number.isNaN(quantity) && Number.isNaN(price)) {
    console.log("Вы ввели некорректные данные");
  } else if (
    (quantity === null || quantity === 0, price === null || price === 0)
  ) {
    console.log("Вы ввели некорректные данные");
  } else {
    console.log(`На складе ${quantity} единицы товара "${name}" на сумму ${sum} деревянных`
    );
  }
}