'use strict';
{
  window.start = (() => {
    const FIGURES_ENG = ['rock', 'scissors', 'paper'];
    const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];
    const gameProps = {
      user: 0,
      bot: 0,
      userInc: 0,
      botInc: 0,
      language: {
        'en': [
          'Player wins!', 'Computer wins!', 'Draw', 'Select',
          'User', 'Computer', 'Are you sure?', 'Results',
        ],
        'ru': [
          'Вы выиграли', 'Вы проиграли', 'Ничья', 'Выберите',
          'Пользователь', 'Компьютер', 'Хотите выйти?', 'Результаты',
        ],
      },
      getAnswer(lang, arr) {
        const strConfirm = lang[6];
        const m = `${lang[3]}: ${arr[0]}, ${arr[1]}, ${arr[2]}`;
        const uMSG = prompt(m, ' ');
        if (typeof uMSG === 'string' && uMSG !== 'undefined') {
          const myRe = new RegExp(uMSG?.toLowerCase() || 'undefined', 'y');
          const uFilter = arr.filter((i) => myRe.exec(i));
          const bFilter = [...Array(arr)].map((i) => i[this.randomNum(0, 2)]);
          if (!arr.includes(uFilter[0])) return this.getAnswer(lang, arr);
          return [uFilter[0], bFilter[0]];
        }
        if (confirm(strConfirm) === false) return this.getAnswer(lang, arr);
        return 0;
      },
      run(arg) {
        let arr = []; let state;
        arg === 'ENG' || arg === 'EN' ? arr = FIGURES_ENG : arr = FIGURES_RUS;
        arg === 'ENG' || arg === 'EN' ? state = this.language['en'] :
        state = this.language['ru'];
        const answer = this.getAnswer(state, arr);
        const user = answer[0] ?? 0; const bot = answer[1] ?? 0;
        if (answer === 0) {
          alert(state[7] + '\n' + state[5] + ': ' +
          this.bot + '\n' +
          state[4] + ': ' + this.user);
          return;
        }
        console.log(`You: ${user} Bot: ${bot}`);
        if ((user === arr[0] && bot === arr[1]) ||
            (user === arr[2] && bot === arr[0]) ||
            (user === arr[1] && bot === arr[2])) {
          this.user = ++this.userInc;
          alert(state[5] + ': ' + this.bot + '\n' +
          state[4] + ': ' + this.user + '\n' + state[0]);
          return this.run(arg);
        }
        if (user === bot) {
          alert(state[5] + ': ' + this.bot + '\n' +
          state[4] + ': ' + this.user + '\n' + state[2]);
          return this.run(arg);
        } else {
          this.bot = ++this.botInc;
          alert(state[5] + ': ' + this.bot + '\n' +
          state[4] + ': ' + this.user + '\n' + state[1]);
          return this.run(arg);
        }
      },
      randomNum(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
      },
    };
    const game = (language) => {
      gameProps.run(language);
      console.log(`You: ${gameProps.user} Bot: ${gameProps.bot}`);
      console.log(gameProps);
    };
    return {
      game,
    };
  })();
}
