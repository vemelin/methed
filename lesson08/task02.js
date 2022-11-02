'use strict'
{
  const randomArray = (l, m, n) => {
		const res = [...Array(l).keys()].reduce((arr) => (arr.splice(1, 0, Math.round(Math.random() * (n - m) + m)), arr), []);
		return console.log(res);
  }
  randomArray(10, 10, 20);
}