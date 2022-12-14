export const circle = () => {
  const duration = 1500;
  const distance = 500;
  let requestId = NaN;

  const circle = document.querySelector('.circle');
  const start = document.querySelector('.start');
  const stop = document.querySelector('.stop');

  const startAnimation = (duration, callback) => {
    let startAnimation = NaN;

    requestId = requestAnimationFrame(function step(timeStamp) {
      startAnimation ||= timeStamp;

      const progress = (timeStamp - startAnimation) / duration;

      callback(progress);
      if (progress < 1) {
        requestId = requestAnimationFrame(step);
      }
    });
  };

  const easeInOut = time => 0.5 * (1 - Math.cos(Math.PI * time));

  start.addEventListener('click', () => {
    startAnimation(duration, (progress) => {
      const left = easeInOut(progress) * distance;
      circle.style.transform = `translateX(${left}px)`;
    });
  });

  stop.addEventListener('click', () => {
    cancelAnimationFrame(requestId);
  });
};
