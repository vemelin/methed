export const humburger = () => {
  const hiddenNav = document.querySelector('.header__menu');

  const isOpen = () => {
    if (hiddenNav.style.opacity < 0) {
      hiddenNav.classList.add('active');
      return false
    };
    if (hiddenNav.style.opacity > 0) {
      hiddenNav.classList.remove('active');
      return true;
    };
  }

  const toggle = () => isOpen() ? close() : open();

  document.addEventListener('click', ({target}) => {
    if (!target.classList.contains('header__menu') ||
      target.classList.contains('header__item')) {
      close();
    }
    if (target.matches('.header__menu-button')){
      toggle();
    }
  });

  const startAnimation = (duration, callback) => {
    let startAnimation = NaN;    

    requestAnimationFrame(function step(timestamp) {
      startAnimation ||= timestamp;
      const progress = (timestamp - startAnimation) / duration;

      callback(progress);
      if (progress < 1) requestAnimationFrame(step);
    });
  };

  const open = () => {
    const duration = 100;
    startAnimation(duration, (progress) => hiddenNav.style.opacity = progress);
  };

  const close = () => {
    const duration = 10;
    startAnimation(duration, (progress) => hiddenNav.style.opacity = 1 - progress);
  };

};