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
      // eslint-disable-next-line max-len
      return this.items.reduce((acc, i) => (acc + (i.qty * i.price)) * this.discount, 0);
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
        // eslint-disable-next-line max-len
        this.items.map(i => console.log(`${i.name}: qty ${JSON.stringify(i.qty)} * ${JSON.stringify(i.price)} = ${i.qty * i.price}  \n`));
    },
    get totalAmount() {
      return this.totalPrice;
    },
    set totalAmount(n) {
      !Number.isNaN(parseFloat(n)) && isFinite(n) && typeof n !== 'string' ?
      this.totalPrice = n :
      this.totalPrice = this.calculateItemPrice();
    },
    set setDiscount(promocode) {
      promocode === 'METHED' ? this.discount = 15 / 100 :
      promocode === 'NEWYEAR' ? this.discount = 21 / 100 :
      this.discount = 0;
    },
  };
  cart.setDiscount = 'METHED';
  cart.add('Hyundai Sonata', 36250, 1); // Integer validation if str assign 0
  cart.add('Toyota Camry', 29991, 1);
  // cart.items.forEach(i => console.log(i));
  cart.totalAmount = '100';
  console.log(`Total Price: ${cart.totalAmount} w/ discount ${cart.discount}`);
  // cart.clear();
  cart.print();
}
