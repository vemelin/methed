'use strict'

{
    // Task # 2
    const rain = Math.round(Math.random() * 1);
    if (rain === 1) {
        console.log('Пошёл дождь. Возьмите зонт!');
    } else if (rain === 0) {
        console.log('Дождя нет!');
    }
}

{
    // Task # 3
    const qn1 = + prompt('Введите кол-во баллов по математике:', ''),
        qn2 = + prompt('Введите кол-во баллов по русскому языку:', ''),
        qn3 = + prompt('Введите кол-во баллов по информатике:', '');

    let sum = qn1 + qn2 + qn3;
    if (sum === 265) {
        console.log('Поздравляю, вы поступили на бюджет!');
    } else {
        console.log('Вы не поступили.');
    }
}

{
    // Task # 4
    const getCash = + prompt('Cколько денег вы хотите снять в банкомате?', '');

    if (getCash % 100 === 0 && getCash !== 0) {
        console.log(`Можете забрать деньги`)
    } else {
        console.log(`Банкомат не может выдать вам такую сумму`);
    }
}