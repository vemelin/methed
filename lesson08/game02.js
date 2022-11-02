'use strict'
{
  const isNum = (n) => !isNaN(parseFloat(n)) && isFinite(n);
  const randomNumber = (min, max) => {
    let res;
    min = +prompt('Min Number', ``),
    max = +prompt('Max Number', ``);
    res = Math.round(Math.random() * (max - min) + min);
    return res;
  };
  const startGame = (...arg) => {
    const randomNum = randomNumber(arg[0], arg[1]);
    console.log('Random Num: ' + randomNum);
    let userNum, min, max, counter;
    do {
      const userNum = +prompt('Enter your number', ``);
      if (isNaN(parseFloat(userNum)) || userNum === '') {
        console.log('Введите число');
        return startGame();
      } if (userNum === null || userNum === 0) {
        console.log('Игра закончена'); 
        break;
      } if (userNum < randomNum) {
        console.log('Больше!');
        return startGame();
      } if (userNum > randomNum) {
        console.log('Меньше!');
        return startGame();
      } else {
        console.log('Правильно!');
        break;
      }
    } while (!isNum(userNum));
    
  };
  startGame(10, 20);
}