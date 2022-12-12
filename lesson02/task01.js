'use strict'
{
  const input = document.createElement('input');
  const p = document.createElement('p');

  document.body.append(input);
  document.body.append(p);

  const debounce = (func, wait) => {
    return function execute(...args) {
      let previousCall = this.lastCall;
      if (previousCall && this.lastCall - previousCall <= wait) {
        clearTimeout(this.lastCall);
      }
      this.lastCallTimer = setTimeout(() => func(...args), wait)
    }
  };

  const getInputData = () => p.textContent = input.value;
  const debounceHandle = debounce(getInputData, 300);
  input.addEventListener('keyup', debounceHandle);
}