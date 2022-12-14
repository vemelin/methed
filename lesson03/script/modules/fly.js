export const flight = () => {
  const flight = document.createElement('div');
  flight.style.cssText = `
    position: fixed;
    width: 50px;
    height: 50px;
    left: 0;
    top: 0;
    pointer-events: none;
    background: url('image/fly.svg') center/contain no-repeat;
  `;
  document.body.append(flight);

  const el = document.documentElement;
  const airplanePosition = () => {
    const maxLeft = el.scrollWidth - flight.clientWidth;
    const maxScroll = el.scrollHeight - el.clientHeight;
    const precentScroll = (window.pageYOffset * 100 / maxScroll);

    const left = maxLeft * (precentScroll / 100);

    flight.style.transform = `translateX(${left}px)`;
  };
  airplanePosition();

  window.addEventListener('scroll', () => {
    requestAnimationFrame(airplanePosition);
  });
};
