import { renderTimer } from "./modules/timer.js";

// Hero Timer
const expirationDate = document.querySelector('.timer')
  .getAttribute('data-timer-deadline');

document.addEventListener('DOMContentLoaded', function() {
  renderTimer();
}, false);