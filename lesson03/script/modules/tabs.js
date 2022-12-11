export const tabs = () => {
  const tabContainer = document.querySelector('.tabs__buttons');
  const tabBtns = document.querySelectorAll('.tabs__btn');
  const tabContent = document.querySelectorAll('.tabs__item');

  tabContainer.addEventListener('click', ({target}) => {
    if (target.matches('.tabs__btn')) {
      tabBtns.forEach(btn => {
        if (btn === target) {
          btn.classList.add('tabs__btn_active');
        } else {
          btn.classList.remove('tabs__btn_active');
        }
      });
      tabContent.forEach(el => {
        if (el.dataset.tabs === target.dataset.tabs) {
          el.classList.add('tabs__item_active');
        } else {
          el.classList.remove('tabs__item_active');
        }
      });
    }
  });

  tabBtns.forEach((el, btnIndex) => {
    el.addEventListener('click', e => {
      tabContent.forEach((items, containerIndex) => {
        if (btnIndex === containerIndex) {
          tabBtns[containerIndex].classList.add('tabs__btn_active');
          items.classList.add('tabs__item_active');
        } else {
          tabBtns[containerIndex].classList.remove('tabs__btn_active');
          items.classList.remove('tabs__item_active');
        }
      });
    });
  });
};
