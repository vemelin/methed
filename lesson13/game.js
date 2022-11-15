'use strict';
{
  window.start = (() => {
    const FIGURES_ENG = ['rock', 'scissors', 'paper'];
    const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];
    const language = {
      en: ['Player wins!', 'Computer wins!', 'Draw', 'Select', 'User', 'Computer', 'Are you sure?', 'Results'],
      ru: ['Вы выиграли', 'Вы проиграли', 'Ничья', 'Выберите', 'Пользователь', 'Компьютер', 'Хотите выйти?', 'Результаты'],
    };
    const UI_EN = [...Array(language.en)].map((i) => i);
    const UI_RU = [...Array(language.ru)].map((i) => i);
    const randomNum = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min);
    };
    const getUserAnswer = (lang, arr) => {
      const strConfirm = lang[6];
      const message = `${lang[3]}: ${arr[0]}, ${arr[1]}, ${arr[2]}`;
      const userMessage = prompt(message, ' ');
      if (typeof userMessage === 'string' && userMessage !== 'undefined') {
        const myRe = new RegExp(userMessage?.toLowerCase() || 'undefined', 'y');
        const userFilter = arr.filter((i) => myRe.exec(i));
        const botFilter = [...Array(arr)].map((i) => i[randomNum(0, 2)]);
        if (!arr.includes(userFilter[0])) return getUserAnswer(lang, arr);
        return [userFilter[0], botFilter[0]];
      }
      if (confirm(strConfirm) === false) return getUserAnswer(lang, arr);
      return 0;
    };
    let userPoint = 0;
    let botPoint = 0;
    const system = (language, user, bot) => {
      let arr = []; let lang = [];// eslint-disable-next-line max-len
      language === 'ENG' || language === 'EN' ? (arr = FIGURES_ENG) : (arr = FIGURES_RUS);
      language === 'ENG' || language === 'EN' ? (lang = UI_EN[0]) : (lang = UI_RU[0]);
      const answer = getUserAnswer(lang, arr);
      user = answer[0] ?? 0; bot = answer[1] ?? 0;
      if (answer === 0) { // eslint-disable-next-line max-len
        alert(`${lang[7]}:\n${lang[5]}: ${botPoint},\n${lang[4]}: ${userPoint}`);
        return;
      }
      console.log(`${lang[5]}: ${bot} ${lang[4]}: ${user}`);
      if (
        (user === arr[0] && bot === arr[1]) ||
        (user === arr[2] && bot === arr[0]) ||
        (user === arr[1] && bot === arr[2])
      ) { // eslint-disable-next-line max-len
        alert(`${lang[5]}: ${botPoint},\n${lang[4]}: ${userPoint}\n${lang[0]}:`);
        userPoint++;
        return system(language);
      }
      if (user === bot) {// eslint-disable-next-line max-len
        alert(`${lang[5]}: ${botPoint},\n${lang[4]}: ${userPoint}\n${lang[2]}:`);
        return system(language);
      } else {
        botPoint++; // eslint-disable-next-line max-len
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
