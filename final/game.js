'use strict';
{
  window.start = (() => {
    const FIGURES_ENG = ['rock', 'scissors', 'paper'];
    const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];
    const rpsGame = {
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
        if (confirm(strConfirm) === false) return 0;
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
          return 0;
        }
        if ((user === arr[0] && bot === arr[1]) ||
            (user === arr[2] && bot === arr[0]) ||
            (user === arr[1] && bot === arr[2])) {
          this.user = ++this.userInc;
          alert(state[5] + ': ' + this.bot + '\n' +
          state[4] + ': ' + this.user + '\n' + state[0]);
          return;
        }
        if (user === bot) {
          alert(state[5] + ': ' + this.bot + '\n' +
          state[4] + ': ' + this.user + '\n' + state[2]);
          return this.run(arg);
        } else {
          this.bot = ++this.botInc;
          alert(state[5] + ': ' + this.bot + '\n' +
          state[4] + ': ' + this.user + '\n' + state[1]);
          return;
        }
      },
      randomNum(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
      },
    };
    const squidGame = {
      user: 5,
      bot: 5,
      isNum(n) {
        return !Number.isNaN(parseFloat(n)) && isFinite(n);
      },
      isOdd(arg) {
        return !!(arg % 2);
      },
      getBotNum(arg) {
        const m = ('Бот загадал нечетное число? Ок если четное');
        const getAnswer = (confirm(m) === true);
        if (this.isOdd(arg)) return true;
        if (!this.isOdd(arg) && getAnswer) return false;
      },
      getUserAnswer() {
        const msg = +prompt(`Ты готов? Осталось ${this.user} шаров`, '');
        if (!this.isNum(msg) || msg === 0) {
          alert('Введите число, не равное 0');
          return this.getUserAnswer();
        }
        if (msg > this.user) {
          alert('Введеное значение больше количества шаров');
          return this.getUserAnswer();
        }
        return msg;
      },
      setAdjustments() {
        if (this.user < 0) this.user = 0;
        if (this.user > 10) this.user = 10;
        if (this.bot < 0) this.bot = 0;
        if (this.bot > 10) this.bot = 10;
      },
      mustEnterNum(arg) {
        if (!this.isNum(arg)) {
          alert('Введите число');
          return this.run();
        }
        return arg;
      },
      run() {
        let getBotNumber; let setUserNum;
        const setBotNum = rpsGame.randomNum(1, 5);
        if (rpsGame.user === 0 && rpsGame.bot === 0) {
          const quit = rpsGame.run();
          if (quit === 0) return;
        }
        if (rpsGame.user === 0 && setUserNum !== 0) {
          getBotNumber = this.getBotNum(setBotNum);
          setUserNum = this.getUserAnswer();
          this.mustEnterNum(setUserNum);
        }
        if (rpsGame.bot === 0) {
          setUserNum = this.getUserAnswer();
          this.mustEnterNum(setUserNum);
          getBotNumber = this.getBotNum(setBotNum);
        }
        if ((!getBotNumber) && this.isOdd(setUserNum)) {
          this.bot += setUserNum;
          this.user -= setUserNum;
          this.setAdjustments();
          if (this.user <= 0) alert('У вас закончились шары');
        } else {
          this.user += setBotNum;
          this.bot -= setBotNum;
          this.setAdjustments();
          if (this.bot <= 0) alert('У бота закончились шары');
        }
        if (this.bot === 0 || this.user === 0) {
          const m = 'Хотите сыграть еще?';
          if (confirm(m) === false) return;
          rpsGame.user = 0;
          rpsGame.bot = 0;
          rpsGame.userInc = 0;
          rpsGame.botInc = 0;
          this.bot = 5;
          this.user = 5;
        }
        this.run();
      },
    };
    const game = (language) => {
      squidGame.run();
      console.log(`Количество шариков\n` +
      `Игрок: ${squidGame.user}\n` +
      `Бот: ${squidGame.bot}`);
    };
    return {
      game,
    };
  })();
}
