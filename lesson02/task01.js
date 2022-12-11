'use strict'
{
  const input = document.createElement('input');
  const p = document.createElement('p');
  p.textContent = 'Placeholder:';

  document.body.append(p);
  document.body.append(input);

  input.addEventListener('keyup', e => {
    setTimeout((result) => {
      p.textContent = `Placeholder: ${result}`;
    }, 300, e.target.value)
  });
}