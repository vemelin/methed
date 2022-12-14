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
  
  const renderData = () => p.textContent = input.value;
  const debounceHandle = debounce(renderData, 300);
  input.addEventListener('keyup', debounceHandle);
}