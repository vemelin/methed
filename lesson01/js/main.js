'use strict';
{
  const list = document.querySelector('.items'),
    firstBlock = document.querySelector('.item_one'),
    secondBlock = document.querySelector('.item_two'),
    thirdBlock = document.querySelector('.item_three'),
    fourthBlock = document.querySelector('.item_four'),
    fifthBlock = document.querySelector('.item_five'),
    sixthBlock = document.querySelector('.item_six');

    // Sort blocks
    list.prepend(firstBlock);
    list.append(secondBlock);
    list.append(thirdBlock);
    list.append(fourthBlock);
    list.append(fifthBlock);
    list.append(sixthBlock);

    // Shift Ul Lists between blocks
    fourthBlock.querySelectorAll('.props__list li')[2].append(
      secondBlock.querySelector('.props__item_four'));
    secondBlock.querySelectorAll('.props__list li')[7].append(
      sixthBlock.querySelectorAll('.props__item_two')[0]);
    secondBlock.querySelectorAll('.props__list li')[8].append(
      sixthBlock.querySelectorAll('.props__item_two')[0]);
    fifthBlock.querySelector('.content').append(
      thirdBlock.querySelectorAll('.props__list')[0]);
    thirdBlock.querySelector('.content').append(
      fifthBlock.querySelectorAll('.props__list')[0]);

    // Sort Titles
    secondBlock.querySelector('.item__title').after(
      fifthBlock.querySelectorAll('.item__title')[0]);
    sixthBlock.querySelector('.item__title').after(
      secondBlock.querySelectorAll('.item__title')[0]);
    fifthBlock.querySelector('img').after(
      sixthBlock.querySelectorAll('.item__title')[0]);
    
    // Rewrite Yellow Title
    thirdBlock.querySelector('h2').innerText = thirdBlock.querySelector('img').getAttribute('alt');
    }