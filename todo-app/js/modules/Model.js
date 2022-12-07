export class Model {
  constructor() {
    // const data = `Connect: modal`;
  }
  setStorage = (key, data) => localStorage.setItem(key, JSON.stringify(data.sort().reverse()));
  getStorage = key => JSON.parse(localStorage.getItem(key)) || [];

  addTask = (key, task) => {
    const data = this.getStorage(key);
    data.push(task);
    this.setStorage(key, data);
  };
  removeTask = (key, id) => {
    const dataStorage = this.getStorage(key);
    const temp = dataStorage.filter(item => item.id !== id);
    localStorage.setItem(key, JSON.stringify(temp));
  };
  saveTask = (key, id, newName) => {
    const dataStorage = this.getStorage(key);
    const temp = dataStorage.filter(item => {
      if (item.id === id) {
        item.title = newName;
      }
      return item;
    });
    localStorage.setItem(key, JSON.stringify(temp));
  };
  updateTaskStatus = (key, id, status, attribute, btnText) => {
    const dataStorage = this.getStorage(key);
    const temp = dataStorage.filter(item => {
      if (item.id === id) {
        item.status["context"] = status;
        item.status["isActive"] = false;
        item.status["attribute"] = attribute;
        item.status["btnText"] = btnText;
      }
      return item;
    });
    localStorage.setItem(key, JSON.stringify(temp));
  };
  data(e){
    const randomNum = Math.random().toString().substring(2, 10);
    const data = new FormData(e.target);
    const task = {
      id: randomNum,
      title: data.get('title'),
      priority: data.get('priority'),
      status: {context: 'В процессе', isActive: true, btnText: 'Завершить'},
    }
  }
}