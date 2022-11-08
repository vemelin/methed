'use strict';
{
  const cart = {
    items: [],
    totalPrice: 0,
    count: 0,
    isNum(n) {
      return !Number.isNaN(parseFloat(n)) && isFinite(n);
    },
    add(name, price, qty) {
      const items = {
        name,
        price,
        qty: this.increaseCount(qty),
      };
      return this.items.push(items);
    },
    increaseCount(inc) {
      if (typeof inc === 'string') return 0;
      return this.count = this.isNum(inc) ? this.count += inc : 0;
    },
    calculateItemPrice() {
      return this.items.reduce((acc, i) => acc + (i.qty * i.price), 0);
    },
    clear() {
      const reset = {
        items: [],
        totalPrice: 0,
        count: 0,
      };
      return Object.assign(cart, reset);
    },
    print() {
      this.items.length === 0 ? console.log(`The cart is empty`) :
        this.items.map(i => console.log(`${i.name}: ${JSON.stringify(i)}\n`));
    },
  };
  Object.defineProperty(cart, 'totalPrice', {
    get() {
      return this.calculateItemPrice();
    },
    set(n) {
      if (typeof n === 'string') console.log('Введите число');
    },
  });
  cart.add('Hyundai Sonata', 36250, '1'); // Integer validation if str assign 0
  cart.add('Toyota Camry', 29991, 1);
  cart.items.forEach(i => console.log(i));
  cart.totalPrice = 0;
  console.log(`Total Price: ${cart.totalPrice}`);
  // cart.clear();
  cart.print();
}
