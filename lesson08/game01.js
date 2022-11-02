'use strict'
{
  const isNum = (n) => !isNaN(parseFloat(n)) && isFinite(n);
  const randomNumber = () => Math.round(Math.random() * 101);
  const startGame = (input) => {
    const randomNum = randomNumber();
    console.log('Random Num: ' + randomNum);
    let userNum;
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
  startGame();
}