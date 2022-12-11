
const timer = (expirationDate, element) => {
  const leftDays = element.querySelector('.timer__count_days');
  const leftHours = element.querySelector('.timer__count_hours');
  const leftMinutes = element.querySelector('.timer__count_minutes');

  const daySetText = element.querySelector('.timer__units_days');
  const hourSetText = element.querySelector('.timer__units_hours');
  const minSetText = element.querySelector('.timer__units_minutes');

  const remainedTime = () => {
    const end = new Date(expirationDate).getTime();
    const start = Date.now();
    const timeLeft = end - start;
    const minutes = Math.floor(timeLeft / 1000 / 60 + 1) % 60;
    const hours = Math.floor(timeLeft / 1000 / 60 / 60) % 24;
    const days = Math.floor(timeLeft / 1000 / 60 / 60 / 24);
    return {timeLeft, days, hours, minutes};
  };

  const declension = (num, words) => words[(num % 100 > 4 && num % 100 < 20) ?
      2 :
      [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];

  const start = () => {
    const timer = remainedTime();
    const interbalId = setTimeout(start, 1000);
    leftHours.textContent = timer.hours;
    leftMinutes.textContent = timer.minutes;

    if (timer.hours < 10) leftHours.textContent = '0' + timer.hours;
    if (timer.minutes < 10) leftMinutes.textContent = '0' + timer.minutes;
    leftDays.textContent = timer.days;

    daySetText.textContent = declension(timer.days, ['день', 'дня', 'дней']);
    hourSetText.textContent = declension(timer.hours, ['час', 'часа', 'часов']);
    minSetText.textContent = declension(timer.minutes, ['минута', 'минуты', 'минут']);

    if (timer.timeLeft <= 0 || isNaN(timer.timeLeft)) {
      clearTimeout(interbalId);
      leftDays.textContent = '00';
      leftHours.textContent = '00';
      leftMinutes.textContent = '00';
    }

    // Remove Title and Container
    if (timer.minutes <= 0) {
      clearTimeout(interbalId);
      document.querySelector('.hero__text').remove();
      document.querySelector('.hero__timer').remove();
    }

    // Hilight End Of Time
    const hilightEndOfPromo = () => {
      const hoursLeft = Math.floor(timer.timeLeft / 1000 / 60 / 60);
      const timerStyle = (color) => {
        const timerContainer = document.querySelectorAll('.hero__timer');
        timerContainer.forEach(item => {
          item.style.cssText = `background: ${color};`;
        });
      };
      if (hoursLeft < 24) {
        timerStyle('#556B2F');
      } else if (hoursLeft < 53) {
        timerStyle('#8B0000');
      } else {
        timerStyle('none');
      }
    };
    hilightEndOfPromo();
  };
  start();
};

const renderView = () => `
  <p class="timer__title">До конца акции осталось:</p>
  <p class="timer__item timer__item_days">
    <span class="timer__count timer__count_days">2</span>
    <span class="timer__units timer__units_days">дня</span></p>
  <p class="timer__item timer__item_hours">
    <span class="timer__count timer__count_hours">05</span>
    <span class="timer__units timer__units_hours">часов</span></p>
  <p class="timer__item timer__item_minutes">
    <span class="timer__count timer__count_minutes">12</span>
    <span class="timer__units timer__units_minutes">минут</span></p>
`;

export const renderTimer = () => {
  const el = document.querySelectorAll('[data-timer-deadline]');
  el.forEach(item => {
    const date = item.dataset.timerDeadline;
    item.innerHTML = renderView(date);
    timer(date, item);
  });
};
