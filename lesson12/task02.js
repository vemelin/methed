'use strict';
{
  const arr = [];
  const renderData = (...arg) => {
    const randomNum = Math.floor(Math.random() * 11);
    arr.push(randomNum);
    const sum = arr.reduce((acc, number) => acc + number);
    if (sum > 50) console.log(`Сумма чисел: ${sum}`);
    if (sum > 50) return console.log(arr);
    if (sum < 50) return renderData(arg);
  };
  renderData(arr);
}
