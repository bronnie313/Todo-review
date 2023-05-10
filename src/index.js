import './style.css';
import initList from './modules/initList.js';
import store from './modules/store.js';
import reorder from './modules/reorder.js';
import displayTask from './modules/displayTask.js';

const form = document.getElementById('form');
const task = document.getElementById('task');
const items = document.getElementById('items');
const clear = document.getElementById('clear');

let listName = initList();

// adding task
const addTask = (task) => {
  const data = {
    completed: false,
    text: task,
    index: listName.length + 1,
  };
  listName.push(data);
  store(listName);
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addTask(task.value);
  displayTask();
});

// deleting task
items.addEventListener('click', (e) => {
  if (e.target.tagName.toLowerCase() === 'i') {
    const button = e.target.parentNode;
    const index = parseInt(button.id.replace('delete', ''), 10);
    listName.splice(index, 1);
    reorder(listName);
    store(listName);
    displayTask();
  }
});

window.onload = () => {
  initList();
  displayTask();
};

clear.addEventListener('click', (e) => {
  e.preventDefault();
  listName = JSON.parse(localStorage.getItem('tasks')) || [];
  listName = listName.filter((item) => item.completed === false);
  reorder(listName);
  store(listName);
  displayTask();
});
