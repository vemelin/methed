'use strict'
{
    const NOD = (x, y) => {
        if (y > x) return NOD(y, x);
        if (!y) return x;
        return NOD(y, x % y);
    }
    console.log(NOD(84, 90));
}