export const scrollFlight = () => {
  const airplane = document.createElement('div');
  airplane.style.cssText = `
    position: fixed;
    width: 50px;
    height: 50px;
    right: 0;
    bottom: 0;
    pointer-events: none;
    background: url('/IndoTravel/img/temp/airplane.svg') center/contain no-repeat;
    animation: loader 1.25s infinite;
    z-index: 999;
  `;
  document.body.append(airplane)

  const el = document.documentElement;
  const airplanePosition = () => {
    const maxTop = window.innerHeight - airplane.clientHeight;
    const maxScroll = el.scrollHeight - el.clientHeight;
    const scrollPercent = (window.pageYOffset * 100 / maxScroll);
    const top = maxTop * (scrollPercent / 100);

    // Rotate Airplane
    // airplane.style.transform = `translate(0, -${top}px)`;
    // const topWinBorder = el.scrollHeight - el.scrollTop;
    // const up = () => airplane.style.transform = `translate(0, -${top}px)`;
    // const down = () => airplane.style.transform = `translate(0, -${top}px) rotate(180deg)`;
    // topWinBorder === window.innerHeight ? down : up;
    if (scrollPercent > 0) {
      airplane.style.transform = `translate(0, -${top}px) rotate(180deg)`;
    } else {
      airplane.style.transform = `translate(0, -${top}px) rotate(0deg)`;
    }

    // Remove Airplane if < 758px
    { window.addEventListener('resize', () => {
        if (window.innerWidth <= 758) {
          airplane.remove();
        } else {
          document.body.append(airplane);
        }
      }); }

  };
  airplanePosition();

  window.addEventListener('scroll', () => {
    requestAnimationFrame(airplanePosition);
  });
}