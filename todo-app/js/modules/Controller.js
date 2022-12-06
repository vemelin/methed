export class Controller {
  constructor(otpions) {
    this.model = otpions.model;
  }
  authFormHandler(e) {
    e.preventDefault();
    const userName = e.target.querySelector('#name').value;
  }
  taskControls(userName){
    const removeBtn = document.querySelector('.btn-danger');
    const completeBtn = document.querySelector('.btn-success');
    document.querySelector('body').addEventListener('click', e => {
      const target = e.target;
      if (target.closest('.btn-danger')) {
        const yes = confirm('Вы действительно хотите удалить?');
        if (yes) {
          target.closest('.cta').remove();
          const removeElement = target.closest('.cta').children[0].textContent;
          this.model.removeTask(userName, removeElement);
        }
      } if (target.closest('.btn-success')) {
        target.closest('.cta').classList.remove('table-light');
        target.closest('.cta').classList.add('table-success');
        // target.closest('.cta').children[1].classList.add('text-decoration-line-through')
        if (target.textContent.trim() === 'Завершить') {
          target.textContent = 'Продолжить';
          // target.classList.add('btn-light')
          {
            const id = target.closest('.cta').children[0].textContent.trim();
            const status ='Выполнена';
            const attribute = 'table-success';
            const btnText = target.textContent;
            target.closest('.cta').children[2].textContent = status;
            this.model.updateTaskStatus(userName, id, status, attribute, btnText);
          }
        } else if (target.textContent.trim() === 'Продолжить') {
          // target.classList.remove('btn-light');
          target.closest('.cta').children[1].classList.remove('text-decoration-line-through')
          target.closest('.cta').classList.add('table-light');
          target.textContent = 'Завершить';
          {
            const id = target.closest('.cta').children[0].textContent.trim();
            const status = 'В процессе';
            const attribute = 'table-light';
            const btnText = target.textContent;
            target.closest('.cta').children[2].textContent = status;
            this.model.updateTaskStatus(userName, id, status, attribute, btnText);
          }
        }
      } if (target.closest('.edit')) {
        if (target.textContent.trim() === 'Редактировать') {
          target.closest('.cta').children[1].contentEditable = "true";
          const id = target.closest('.cta').children[0].textContent.trim();
          const editTitle = target.closest('.cta').children[1];
          target.addEventListener('blur', () => {
            let item = editTitle.textContent.trim();
            this.model.saveTask(userName, id, item);
          })
          target.textContent = 'Сохранить';
        } else if (target.textContent.trim() === 'Сохранить') {
          const editTitle = target.closest('.cta').children[1].contentEditable = "false";
          target.textContent = 'Редактировать';
        }
      }
    });
  }
}