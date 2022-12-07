export class View {
  constructor(selector, otpions) {
    this.$el = document.querySelector(selector);
    this.data = otpions.model;
    this.controller = otpions.controller;
    this.modal();
    this.addStyles();
    this.renderPage();
  }
  isNum = (n) => !isNaN(parseFloat(n)) && isFinite(n);
  renderPage() {
    // userName = userName.userName ?? [];
    this.$el.classList.add('vh-100', 'w-100', 'd-flex', 'align-items-center', 'justify-content-center', 'flex-column');
    this.$el.insertAdjacentHTML('afterbegin', this.formAppend());

    const myModal = new bootstrap.Modal(document.getElementById("myModal"));
    myModal.show();

    document.querySelector('.modal-form').addEventListener('submit', e => {
      e.preventDefault();
      const userName = e.target.querySelector('#name').value;

      if(this.isNum(userName)) return;
      if(userName) myModal.hide();

      this.getTable(userName);
      this.addTask(userName);
      this.controller.taskControls(userName);      
      e.target.reset();
    });
  }
  getTable = userName => {
    document.querySelector('.app-container').insertAdjacentHTML('beforeend', `
      <button type="button" id="exit" class="btn btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#myModal">
        Выйти
      </button>
    `);
    this.$el.insertAdjacentHTML('beforeend', this.tableHeader());
    const tbody = document.querySelector('tbody');
    const row = this.data.getStorage(userName).map(task => this.createRow(task))
    tbody.innerHTML = row.join('');
    document.querySelector('#exit').addEventListener('click', () => window.location.reload());
  }
  addStyles(){
    const style = `
      <style type="text/css">
        .table-success .task {
          text-decoration: line-through !important;
        }
        .table-light .task {
          text-decoration: none !important;
        }
      </style>
    `;
    document.head.insertAdjacentHTML('beforeend', style)
  }
  modal() {
    const modal = `
      <div class="modal fade" id="myModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">Введите логин</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form class="modal-form">
              <div class="modal-body">
                  <input type="text" name="userName" class="form-control" id="name" required >
              </div>
              <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
              <!-- <button id="the-submit" type="submit" class="btn btn-primary" data-bs-dismiss="modal">Авторизоваться</button> -->
              <button id="the-submit" type="submit" class="btn btn-primary">Авторизоваться</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('afterend', modal);
  };
  formAppend() {
    return `
      <h3>Todo App</h3>
      <form class="d-flex align-items-center mb-3">
        <label class="form-group me-3 mb-0" id="title">
          <input type="text" class="form-control" name="title" placeholder="ввести задачу">
        </label>

        <select id="priority" name="priority" style="width: 120px" id="priority" class="form-select me-3 priority" name="priority">
          <option value="table-light" selected>Обычная</option>
          <option value="table-warning">Важная</option>
          <option value="table-danger">Срочная</option>
        </select>

        <button type="submit" class="btn btn-primary me-3">
          Сохранить
        </button>

        <button type="reset" class="btn btn-warning">
          Очистить
        </button>
      </form>
    `;
  }
  createRow = (task) => {
    return `
      <tr class="${task.status['attribute']} cta">
        <td>${task.id}</td>
        <td class="task">
          ${task.title}
        </td>
        <td>${task.status['context']}</td>
        <td>
          <button type="submit" class="btn btn-primary edit" style="width: 140px;">
            Редактировать
          </button>
          <button class="btn btn-danger">
            Удалить
          </button>
          <button class="btn btn-success" style="width: 140px;">
            ${task.status['btnText']}
          </button>
        </td>
      </tr>
    `;
  }
  tableHeader() {
    return `
      <div class="table-wrapper">
        <table class="table table-hover table-bordered">
          <thead>
            <tr>
              <th>№</th>
              <th>Задача</th>
              <th>Статус</th>
              <th>Действия</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
    `;
  }
  addTask(userName){
    document.querySelector('form').addEventListener('submit', e => {
      e.preventDefault();

      // Trim String & Check if the input field is empty then return
      const taskInputField = document.querySelector('.form-control');
      if(taskInputField.value === 0 || taskInputField.value.trim() === '') return;

      const tbody = document.querySelector('tbody');
      const randomNum = Math.random().toString().substring(2, 10);
      const data = new FormData(e.target);
      const task = {
        id: randomNum,
        title: data.get('title'),
        priority: data.get('priority'),
        status: {context: 'В процессе', isActive: true, btnText: 'Завершить'},
      }
      this.data.addTask(userName, task);
      const row = this.data.getStorage(userName).map(task => this.createRow(task));
      tbody.innerHTML = row.join('');
      e.target.reset();
    });
  }
}