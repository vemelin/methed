'use strict'
{
    const name = 'iPhone 12 Pro',
        quantity = 5,
        category = 'mobile phone',
        price = 750;

    const sum = quantity * price;
    console.log(`Общая сумма товара ${sum}`);
}

{
    const name = prompt('Наименование товара?', ''),
        quantity = + prompt('Количество товара?', ''),
        category = prompt('Категория товара?', ''),
        price = + prompt('Цена товара?', ''),
        sum = quantity * price;
        
    console.log(`На складе ${quantity} единицы товара "${name}" на сумму ${sum} деревянных`);
}