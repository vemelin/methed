'use strict'
{
  const randomArray = (l, m, n, arg) => {
  const result = [...Array(l).keys()]
    .reduce((arr) => (arr.splice(1, 0, Math.round(Math.random() * (n - m) + m)), arr), [])
    .filter((i) => arg === 'even' ? !(i % 2) : i % 2);
    return console.log(result);
  }
  randomArray(10, 10, 20, 'odd');
}