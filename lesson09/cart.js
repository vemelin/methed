"use strict";
{
  const cart = {
    items: [],
    totalPrice: 100,
    count: 0,
    isNum(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    },
    getTotalPrice() {
      return this.calculateItemPrice();
    },
    add(name, price, qty) {
      const items = {
        name,
        price,
        qty: this.increaseCount(qty),
      }
      return this.items.push(items);
    },
    increaseCount(inc) {
      if (typeof inc === 'string') return 0;
      return this.count = this.isNum(inc) ? this.count += inc : 0;
    },
    calculateItemPrice() {
      const sum = this.items.reduce((acc, i) => acc + (i.qty * i.price), 0);
      return sum;
    },
    clear() {
      const reset = {
        items: [],
        totalPrice: 0,
        count: 0,
      }
      return Object.assign(cart, reset);
    },
    print() {
      this.items.length === 0 ? console.log(`The cart is empty`) :
        this.items.map(i => console.log(`${i.name}: ${JSON.stringify(i)}\n`))
    },
  };
  cart.add('Hyundai Sonata', 36250, 1);
  cart.add('Kia M5', 23790, '1'); // Integer validation if Quantity is string apply 0
  cart.add('Toyota Camry', 29991, 1);
  cart.add('Nissan Maxima', 38140, '30');
  cart.items.forEach(i => console.log(i));
  console.log(`getTotalPrice: ${cart.getTotalPrice()}`);
  // cart.clear();
  cart.print()
}