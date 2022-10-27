'use strict'
const income = + prompt('Введите зарплату', '');

{
    let result = 0;

    switch (true) {
        case income <= 15000:
            result = income * 0.13;
            console.log(`13% на доход до 15 000 ₽: ${result})`);
            break;

        case income >= 15000 && income <= 50000:
            result = (income - 15000) * 0.2;
            console.log(`20% на остаточный доход от суммы свыше 15 000 ₽ и не выше 50 000 ₽: ${result})`);
            break;

        case income > 50000:
            result = (income - 50000) * 0.3;
            console.log(`30% на остаточный доход от суммы свыше 50 000 ₽: ${result})`);
            break;

        default:
            break;
    }
}