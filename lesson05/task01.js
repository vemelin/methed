'use strict'

const newValue = + prompt('Введите сумму', '');

const currencyConverter = (input) => {
    let amount = input;
    if (!Number.isNaN(amount) && amount > 0) {
        const usd = 64;
        let rub = amount * usd * 1.2;
        return console.log(`Вы получите: ${rub}₽`);
    }
    else {
        console.log('Вам требуется ввести сумму');
    }
};

currencyConverter(newValue);