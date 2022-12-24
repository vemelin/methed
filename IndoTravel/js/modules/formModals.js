const overlay = document.createElement('div');
overlay.classList.add('active__modal');
const modalWrapper = document.createElement('div');
const h2 = document.createElement('h2');
const p = document.createElement('p');
h2.style.cssText = `
  font: 34px Merriweather normal;
`;
p.style.cssText = `
  font: 18px Nunito normal;
  text-align: center;
`;

overlay.style.cssText = `
  position: fixed;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  overflow: auto;
  background: rgba(255, 255, 255, 0.8);
`;

modalWrapper.style.cssText = `
  border: 1px solid #AFAFAF;
  border-radius: 30px;
  max-width: 600px;
  max-height: 320px;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  padding: 40px 50px;
  color: #303030;
  background-color: #fff;
  box-shadow: 0 4px 30px rgb(0 0 0 / 30%);
  opacity: 1;
  transition: 0.5s;
  z-index: 1;
  display: grid;
  place-items: center;
`;

export const modalMsg = (title, txt, svg) => {
  const btn = document.createElement('div');
  btn.innerHTML = `<button class="button hero__button try__again">Забронировать</button>`;
  const svgImage = `
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="50" fill="#78EC6E"/>
    <path d="M42.2618 60.8332L31.4285 49.9999L27.8174 53.611L42.2618 68.0554L73.2142 37.1031L69.6031 33.4919L42.2618 60.8332Z" fill="white"/>
    </svg>
  `;

  document.body.append(overlay);
  overlay.append(modalWrapper);
  modalWrapper.append(h2);
  modalWrapper.append(p);
  if (svg) {
    modalWrapper.insertAdjacentHTML('beforeend', svgImage);
  } else {
    modalWrapper.append(btn);
  }

  h2.textContent = title;
  p.textContent = txt;

  // Success modal, closing afeter 10 seconds
  const msg = () => {
    let inc = 0;
    let endTime = 10;
    const tick = setInterval(() => {
      inc++
      const seconds = endTime - inc;
      if (inc >= endTime) {
        overlay.remove();
        clearInterval(tick);
      }
      p.textContent = txt + '\n' +`Окно закроется через ${seconds}, нажмите ESC для выхода`;
    }, 1000);

    document.addEventListener('click', e => {
      if(e.target.classList.contains('active__modal') || 
      e.target.classList.contains('try__again')) {
        overlay.remove();
        clearInterval(tick);
        modalWrapper.innerHTML = '';
      }
    });
    document.addEventListener('keyup', e => {
      if (e.key === "Escape") {
        clearInterval(tick);
        modalWrapper.innerHTML = '';
        overlay.remove();
      }
    });
  };
  msg();
};