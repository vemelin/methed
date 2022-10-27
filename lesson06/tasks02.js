"use strict";

{
    const value = + prompt('Введите число', '');

    const isPrime = (input) => {
        let checkValue = true,
            num = input;
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                checkValue = false;
                break;
            }
        }
        if (checkValue == true) {
            console.log(`Число ${num} простое`);
        } else {
            console.log(`Число ${num} составное`);
        }
    }

    isPrime(value);
}