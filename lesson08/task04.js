"use strict";
{
  const randomArray = (...arg) => {
    let l = arg[0] > arg[1] ? arg[0] - arg[1] : arg[1] - arg[0];
    const res = [...Array(l + 1)].map((i) => arg[0]++).filter((i) => (i % 4 === 0 ? console.log(i) : 0));
  };
  randomArray(1990, 2024);
}
