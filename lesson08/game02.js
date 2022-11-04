'use strict'
{
  const isNum = (n) => !isNaN(parseFloat(n)) && isFinite(n);
  const askRange = (min, max) => {
    min = +prompt('Min Number', 10),
    max = +prompt('Max Number', 20);
    if (!isNum(min) || !isNum(max)) {
      console.log('Введите число');
      return askRange();
    } else {
      return [min, max];
    }
  }
  let rangeArr = askRange(), increment = 0; 
  let min = rangeArr[0], max = rangeArr[1];
  const inc = () => ++increment;
  const randomNumber = (min, max) => {
    if (!isNum(min)){
      return;
    } if (isNaN(parseFloat(min)) || min === '') {
      return;
    } if (min === null || min === 0) {
      return;
    } else {
      let res = Math.round(Math.random() * (max - min) + min);
      return res;
    }
  }
  const arrNum = [];
  const startGame = (...arg) => {
    const randomNum = randomNumber(arg[0], arg[1]);
    let userNum;
    do {
      let step = inc();
      let findLastAttempt
      let attempts = Math.ceil((arg[1] - arg[0]) * 0.3);
      if (isNum(attempts)) findLastAttempt = [...Array(attempts).keys()].map((i) => i).length;
      if (attempts > 0) console.log(('------------------ \nВсего попыток ' + ((findLastAttempt - step) + 1)));
      if (step <= findLastAttempt || randomNum !== undefined) console.log(`Random Num: ${randomNum}`);
      if (step <= findLastAttempt) console.log('------------------ \nПопытка ' + (step));
      if (arg[0] === 0 || arg[0] === '') {
        console.log('Игра закончена'); 
        return;
      } else {
        if ((findLastAttempt - step) + 1 === 0) {
          console.log('------------------ \nВы исчерпали лимит доверия!');
          return;
        } 
        let userNum = +prompt('Введите номер', '');
        let findNumb = arrNum.find(item => item === userNum);
        arrNum.push(userNum);
        if (arg [0] === undefined || arg[1] === undefined) {
          console.log('Игра закончена'); 
          return;
        } if (arg[0] === 50 && arg[1] === 100) {
          if (step >= 15 - attempts){
            console.log('Вы безнадежны!');
            return;
          } if (userNum === null || userNum === 0) {
            console.log('Игра закончена'); 
            return;
          } else {
            return startGame(arg[0], arg[1]);
          }
        } if (userNum === findNumb) {
          console.log('Это число вы уже вводили');
          return startGame(arg[0], arg[1]);
        } if (!isNum(userNum)) {
          console.log('Введите число');
          return startGame(arg[0], arg[1]);
        } if (userNum === null || userNum === 0) {
          console.log('Игра закончена'); 
          return;
        } if (userNum < randomNum) {
          console.log('Больше!');
          return startGame(arg[0], arg[1]);
        } if (userNum > randomNum) {
          console.log('Меньше!');
          return startGame(arg[0], arg[1]);
        } else {
          console.log('🤘 Правильно!');
          return;
        }
      }
    } while (!isNum(userNum));
  };
  startGame(min, max);
}