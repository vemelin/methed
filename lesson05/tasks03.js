'use strict'

const newValue = prompt('введите слово которое нужно переврнуть', '');

const modifyString = (input) => {
    let str = input;
    console.log(str.split('').reverse().join(''));
}

modifyString(newValue)