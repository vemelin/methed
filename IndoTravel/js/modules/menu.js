export const humburger = () => {
  const humburger = document.querySelector('.header__menu-button');
  const hiddenNav = document.querySelector('.header__menu');
  document.addEventListener('click', ({target}) => {
    const toggle = () => hiddenNav.classList.toggle('header__menu_active');
    if (target.matches('.header__menu-button')){
      toggle();
    } else if (target.matches('.header__menu-button')){
      toggle();
    } else if (!target.classList.contains('header__menu')){
      hiddenNav.classList.remove('header__menu_active');
    } else if (target.classList.contains('header__item')) {
      toggle();
    }
  });
};