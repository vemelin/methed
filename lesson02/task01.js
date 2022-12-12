'use strict'
{
  const input = document.createElement('input');
  const p = document.createElement('p');

  document.body.append(input);
  document.body.append(p);

  const debounce = (func, time) => {
    return function execute(...args) {
      let previousCall = this.lastCall;
      this.lastCall = Date.now();
      if (previousCall && this.lastCall - previousCall <= time) {
        clearTimeout(this.lastCall);
      }
      this.lastCallTimer = setTimeout(() => func(...args), time)
    }
  };
  
  const setInputData = () => p.textContent = input.value;
  const debounceHandle = debounce(setInputData, 300);
  input.addEventListener('keyup', debounceHandle);
}