import initList from './initList.js';
import makeTaskEditable from './edit.js';

const task = document.getElementById('task');
const items = document.getElementById('items');

// display task
const displayTask = () => {
  const listName = initList();
  items.innerHTML = '';
  listName.forEach((_item, i) => {
    const isChecked = listName[i].completed ? 'checked' : '';
    items.innerHTML += `
        <div class="to-do-item">
          <input id="check${i}" type="checkbox" ${isChecked}>
          <div id="area${i}" class="area" contentEditable="true" required>${listName[i].text}</div>
          <button id="delete${i}" class="deleteBtn"><i class="fa-solid fa-trash-can"></i></button>
        </div>
      `;
    task.value = '';
  });
  makeTaskEditable();

  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener('change', (event) => {
      listName[index].completed = event.target.checked;
      localStorage.setItem('tasks', JSON.stringify(listName));
    });
  });
};

export default displayTask;
