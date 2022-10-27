'use strict'

const newValue = prompt('введите слово нижнего регистра', '');

const modifyString = (input) => {
    let str = input;
    console.log(str[0].toUpperCase() + str.substring(1));
}

modifyString(newValue)