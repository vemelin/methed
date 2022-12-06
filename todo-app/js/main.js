import { Model } from "./modules/Model.js";
import { View } from "./modules/View.js";
import { Controller } from "./modules/Controller.js";

const model = new Model();
const controller = new Controller({
  model,
});

const view = new View ('.app-container', {
  controller,
  model,
});

window.view = view;