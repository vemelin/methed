'use strict'
{
  const input = document.createElement('input');
  const p = document.createElement('p');

  document.body.append(input);
  document.body.append(p);

  input.addEventListener('keyup', e => {
    setTimeout((result) => {
      p.textContent = result;
    }, 300, e.target.value)
  });
}