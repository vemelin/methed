'use strict'
{
  const cart = {
    items: [],
    totalPrice: 0,
    count: 0,
    getTotalPrice (totalPrice) {
      return totalPrice;
    },
    add (...arg) {
      return arg;
    },
    increaseCount (...arg) {
      return arg;
    },
    calculateItemPrice (...arg) {
      return arg;
    },
    clear (...arg) {
      return 'clear' + arg;
    },
    print (...arg) {
      console.log(arg);
    },
    cars: ['Hyundai', 'Kia', 'Toyota'],
    status: {
      active: true,
      pending: true,
      inProgress: true,
    },
    say() {
      console.log(`Hello ${this.firstName}`);
    },
  };
  const res = new Object(cart);
  console.log(res.getTotalPrice(10));
}