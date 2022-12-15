export const scrollFlight = () => {
  const airplane = document.createElement('div');
  let buffer = 0;

  airplane.style.cssText = `
    position: fixed;
    width: 50px;
    height: 50px;
    right: 0;
    bottom: 0;
    pointer-events: none;
    background: url('/IndoTravel/img/temp/airplane.svg') center/contain no-repeat;
    z-index: 999;
    transition: all 0.5s;
  `;
  document.body.append(airplane)
  airplane.classList.add('pulse')

  const el = document.documentElement;
  const airplanePosition = () => {
    const maxTop = window.innerHeight - airplane.clientHeight;
    const maxScroll = el.scrollHeight - el.clientHeight;
    const scrollPercent = (window.scrollY * 100 / maxScroll);
    const top = Math.floor(maxTop * (scrollPercent / 100));

    // Rotate Airplane
    if (scrollPercent < buffer) {
      airplane.style.transform = `translate(0, -${top}px) rotate(180deg)`;
    } else {
      airplane.style.transform = `translate(0, -${top}px) rotate(0deg)`;
    }
    buffer = scrollPercent;

    // Remove Airplane if < 758px
    { window.addEventListener('resize', () => {
        if (window.innerWidth <= 758) {
          airplane.remove();
        } else {
          document.body.append(airplane);
        }
      }); }

  };
  window.addEventListener('scroll', airplanePosition);
}