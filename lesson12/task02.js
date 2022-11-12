'use strict';
{
  const arr = [];
  const renderData = (...arg) => {
    const randomNum = Math.floor(Math.random() * 11);
    arr.push(randomNum);
    const sum = arr.reduce((acc, number) => acc + number);
    if (sum > 50) return arr;
    if (sum < 50) return renderData(arg);
  };
  console.log(renderData(arr));
}
