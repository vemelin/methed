'use strict';
import listIPv4 from './ipv4.js';
{
  const renderNum = arg => console.log([...new Set(arg)].length);
  renderNum(listIPv4);
}
