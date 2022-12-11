export const accordion = () => {
  const items = document.querySelectorAll('.item');
  const buttons = document.querySelectorAll('.item__title');
  const styleWrapper = document.querySelectorAll('.item__text-wrapper');

  let heightWrapper = 0;
  styleWrapper.forEach(el => {
    if (heightWrapper < el.scrollHeight) {
      heightWrapper = el.scrollHeight;
    }
  });

  buttons.forEach((el, index) => {
    el.addEventListener('click', e => {
      for (let i = 0; i < items.length; i++) {
        if (index === i) {
          styleWrapper[i].style.height =
            items[i].classList.contains('item_active') ?
            // '' : `${styleWrapper[i].scrollHeight}px`;
            '' : `${heightWrapper}px`;
          items[index].classList.toggle('item_active');
        } else {
          items[i].classList.remove('item_active');
          styleWrapper[i].style.height = '';
        }
      }
    });
  });
};
