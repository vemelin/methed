'use strict';
{
  const cart = {
    items: [],
    totalPrice: 0,
    count: 0,
    discount: 0,
    set setTotalPrice(n) {
      !Number.isNaN(parseFloat(n)) && isFinite(n) && typeof n !== 'string' ?
      this.totalPrice = n :
      this.totalPrice = Math.round(this.calculateItemPrice() * this.discount);
    },
    set setDiscount(promocode) {
      promocode === 'METHED' ? this.discount = 15 / 100 :
      promocode === 'NEWYEAR' ? this.discount = 21 / 100 :
      this.discount = 0;
    },
    isNum(n) {
      return !Number.isNaN(parseFloat(n)) && isFinite(n);
    },
    add(name, price, qty) {
      const items = {
        name,
        price,
        qty,
      };
      return this.items.push(items);
    },
    increaseCount(inc) {
      if (typeof inc === 'string') return 0;
      return this.count = this.isNum(inc) ? this.count += inc : 0;
    },
    calculateItemPrice() {
      // eslint-disable-next-line max-len
      return this.items.reduce((acc, i) => (acc + (i.qty * i.price)), 0);
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
  };
  cart.setDiscount = 'METHED';
  cart.add('Hyundai Sonata', 36250, 1);
  cart.add('Toyota Camry', 29991, 1);
  // cart.clear();
  cart.setTotalPrice = '';
  cart.print();
  console.log(`Total Price: ${cart.totalPrice} w/ discount ${cart.discount}`);
}
