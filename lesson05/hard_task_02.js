'use strict'
{
    const minValue = (a, b) => {
        let min = (a > b) * b + (b > a) * a;
        console.log(min);
    }
    minValue(10, 9)
}