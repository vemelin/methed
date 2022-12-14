export const preloader = () => {
  let startCall = NaN;
  const durationFlight = 1500;
  const durationOpacity = 300;

  let left = 0;

  const overlay = document.createElement('div');
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: black;
    opacity: 1;
  `;

  const flight = document.createElement('div');
  flight.style.cssText = `
    position: fixed;
    width: 50px;
    height: 50px;
    left: ${left};
    top: calc(50% - 25px);
    background: url('image/fly.svg') center/contain no-repeat;
  `;
  overlay.append(flight);
  document.body.append(overlay);

  const hideOverlay = (timeStamp) => {
    startCall ||= timeStamp;
    const progress = (timeStamp - startCall) / durationOpacity;
    overlay.style.opacity = 1 - progress;
    if (progress < 1) {
      requestAnimationFrame(hideOverlay);
    } else {
      overlay.remove();
    }
  };
  // setTimeout(hideOverlay);
  const stepFlight = (timeStamp) => {
    startCall ||= timeStamp;
    const progress = (timeStamp - startCall) / durationFlight;
    left = document.documentElement.scrollWidth * progress;
    flight.style.transform = `translateX(${left}px)`;
    if (progress < 1) {
      requestAnimationFrame(stepFlight);
    } else {
      startCall = NaN;
      requestAnimationFrame(hideOverlay);
    }
  };
  requestAnimationFrame(stepFlight);
};
