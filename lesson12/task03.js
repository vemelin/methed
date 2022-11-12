'use strict';
{
  const rectangle = {
    width: 5,
    height: 5,
    set newWidth(n) {
      !Number.isNaN(parseFloat(n)) && isFinite(n) && typeof n !== 'string' ?
      this.width = n :
      this.width;
    },
    set newHeight(n) {
      !Number.isNaN(parseFloat(n)) && isFinite(n) && typeof n !== 'string' ?
      this.height = n :
      this.height;
    },
    get area() {
      return (this.height * this.width) + 'cm';
    },
    get perimeter() {
      return (2 * (this.height + this.width)) + 'cm';
    },
  };
  rectangle.newWidth = '100'; // if string get default value;
  // rectangle.newHeight = 150;
  console.log('Perimeter:', rectangle.perimeter);
  console.log('Area:', rectangle.area);
}
