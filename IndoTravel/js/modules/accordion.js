export const accordion = () => {
  const items = document.querySelectorAll('.travel__item');
  const btns = document.querySelectorAll('.travel__item-title');
  const content = document.querySelectorAll('.travel__item-text-wrapper');

  let heightWrapper = 0;
  content.forEach(el => {
    if (heightWrapper < el.scrollHeight) {
      heightWrapper = el.scrollHeight;
    }
  });

  btns.forEach((el, index) =>  {
    el.addEventListener('click', () => {
      for (let i = 0; i < items.length; i++) {
        if (index === i) {
          content[i].style.height =
            items[i].classList.contains('travel__item_active') ?
            '' : `${heightWrapper}px`;
          items[index].classList.toggle('travel__item_active');
        } else {
          items[i].classList.remove('travel__item_active');
          content[i].style.height = '';
        }
      };
    })
  });
}