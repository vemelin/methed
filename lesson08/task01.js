'use strict'
{
  const randomArray = (l) => {
    const res = [...Array(l).keys()].reduce((arr) => (arr.splice(1, 0, Math.round(Math.random() * 100)), arr), []);
    return console.log(res);
  }
  randomArray(5);
}