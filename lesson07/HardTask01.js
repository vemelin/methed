'use strict';
{
  const allCashbox = [
    [12, 4500],
    [7, 3210],
    [4, 650],
    [3, 1250],
    [9, 7830],
    [1, 990],
    [6, 13900],
    [1, 370],
  ];
  const getAveragePriceGoods = (...arr) => {
    let sum = [],
      newArr = [],
      averageSum = 0;
    for (let i = 0; i < arr.length; i++) {
      newArr = arr[i];
      for (const key in newArr) {
        sum[i] = newArr[key][1] / newArr[key][0];
        averageSum += sum[i];
      }
    }
    console.log(averageSum / newArr.length);
  };
  getAveragePriceGoods(allCashbox);
}