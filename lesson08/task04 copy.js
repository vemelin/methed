'use strict'
// {
//   const randomArray = (l, m, n, arg) => {
// 		const result = [...Array(l).keys()]
// 			.reduce((arr) => (arr.push(Math.round(Math.random() * (n - m) + m)), arr), [])
// 			.filter((i) => arg === 'even' ? !(i % 2) : i % 2);
// 		return console.log(result);
//   }
//   randomArray(10, 10, 20, 'odd');
// }

{
  const randomArray = (...arg) => {
		let l = arg[0] > arg[1] ? arg[0] - arg[1] : arg[1] - arg[0];
		const res = [...Array(l)].map(i => arg[0]++).filter(i => i % 4 === 0 ? console.log(i) : 0);
  }
  randomArray(1990, 2022);
}

// {
//   const randomArray = (...arg) => {
// 		let l = arg[0] > arg[1] ? arg[0] - arg[1] : arg[1] - arg[0];
// 		const result = [...Array(l)].map(i => arg[0]++);
// 		return console.log(result);
//   }
//   randomArray(2000, 2022);
// }

// {
//   const randomArray = (...arg) => {
// 		let l = arg[0] > arg[1] ? arg[0] - arg[1] : arg[1] - arg[0];
// 		// console.log(l);
// 		const result = Array(l).fill(0).map((i, item) => {
// 			console.log(item.length);
// 		});
// 		return console.log(result);
//   }
//   randomArray(1990, 2022);
// }

{
  const randomArray = (...arg) => {
		const res = [...new Set([...arg])].map(i => {
			if (i % 4 === 0) {
				console.log(`Высокосный\n${i}`) 
			} else {
				console.log(`Не высокосный\n${i}`) 
			}
		});
		// console.log(res);
		// return console.log(res);
}
  randomArray(190, 1325, 11, 12, 11,  123, 123, 123);
}

// const result = [...Array(l).keys()]
// .reduce((arr) => (arr.splice(1, 0, Math.round(Math.random() * (n - m) + m)), arr), [])
// .filter((i) => i % 4 === 0 ? i : 0);

// .map(i => {
// 	i % 4 === 0 ? i + 1 : i + 0;
// 	console.log(i);
// });