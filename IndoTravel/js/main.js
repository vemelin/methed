import { renderTimer } from "./modules/timer.js";
import { accordion } from "./modules/accordion.js";
import { humburger } from "./modules/menu.js";

// Hero Timer
const expirationDate = document.querySelector('.timer')
  .getAttribute('data-timer-deadline');

document.addEventListener('DOMContentLoaded', function() {
  renderTimer();
}, false);

accordion();
humburger();