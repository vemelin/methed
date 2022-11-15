'use strict';
{
  window.start = (() => {
    const FIGURES_ENG = ['rock', 'scissors', 'paper'];
    const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];
    const UI_EN = ['Player wins!', 'Computer wins!', 'Draw', 'Select', 'User', 'Computer', 'Are you sure?', 'Results'];
    const UI_RU = ['Вы выиграли', 'Вы проиграли', 'Ничья', 'Выберите', 'Пользователь', 'Компьютер', 'Хотите выйти?', 'Результаты'];
    const randomNum = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    const getUserAnswer = (lang, arr) => {
      const strConfirm = lang[6];
      const message = `${lang[3]}: ${arr[0]}, ${arr[1]}, ${arr[2]}`;
      const userMessage = prompt(message, ' ');
      if (typeof userMessage === 'string' && userMessage !== 'undefined') {
        const myRe = new RegExp(userMessage?.toLowerCase() || 'undefined', 'y');
        const userFilter = arr.filter(i => myRe.exec(i));
        const botFilter = [...Array(arr)].map((i) => i[randomNum(0, 2)])
        if (!arr.includes(userFilter[0])) return getUserAnswer(lang, arr);
        // if (arr.includes(userFilter[0])) return getUserAnswer(lang, arr);
        // if (`${userFilter}` === `${botFilter}`) console.log(lang[2]);
        return [userFilter[0], botFilter[0]];
      }
      if (confirm(strConfirm) === false) return getUserAnswer(lang, arr);
      return 0;
    };
    let userPoint = 0, botPoint = 0;
    const system = (language, user, bot) => {
      let arr = [], lang = [];
      language === 'ENG' || language === 'EN' ? arr = FIGURES_ENG : arr = FIGURES_RUS;
      language === 'ENG' || language === 'EN' ? lang = UI_EN : lang = UI_RU;
      const answer = getUserAnswer(lang, arr);
      user = answer[0] ?? 0; bot = answer[1] ?? 0;
      if (answer === 0) {
        alert(`${lang[7]}:\n${lang[5]}: ${botPoint},\n${lang[4]}: ${userPoint}`);
        return;
      }
      console.log(`${lang[5]}: ${bot} ${lang[4]}: ${user}`);
      if((user === arr[0] && bot === arr[1]) 
      || (user === arr[2] && bot === arr[0]) 
      || (user === arr[1] && bot === arr[2])) {
        alert(`${lang[5]}: ${botPoint},\n${lang[4]}: ${userPoint}\n${lang[0]}:`);
        console.log(`User point: ${userPoint}`);
        userPoint++;
          return system(language);
        } if (user === bot){
          alert(`${lang[5]}: ${botPoint},\n${lang[4]}: ${userPoint}\n${lang[2]}:`);
          return system(language);
        } else {
        botPoint++;
        alert(`${lang[5]}: ${botPoint},\n${lang[4]}: ${userPoint}\n${lang[1]}:`);
        return system(language);
      }
    };
    const game = (language) => {
      system(language);
    };
    return {
      game,
    };
  })();
}
