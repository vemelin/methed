export const humburger = () => {
  const hiddenNav = document.querySelector('.header__menu');

  const toggle = () => hiddenNav.classList.contains('header__menu_active') ?
  hiddenNav.classList.remove('header__menu_active') :
  hiddenNav.classList.add('header__menu_active');

  document.addEventListener('click', ({target}) => {
    if (target.matches('.header__menu-button')){
      toggle();
    } else if (!target.classList.contains('header__menu') || target.classList.contains('header__item')) {
      hiddenNav.classList.remove('header__menu_active')
    }
  });
};