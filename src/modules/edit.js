import initList from './initList.js';
import store from './store.js';

const makeTaskEditable = () => {
  const listName = initList();
  const taskAreas = document.querySelectorAll('.area');
  taskAreas.forEach((taskArea, index) => {
    taskArea.addEventListener('blur', () => {
      listName[index].text = taskArea.innerText;
    });
    taskArea.addEventListener('keydown', (e) => {
      if (e.keyCode === 13) {
        e.preventDefault();
        listName[index].text = taskArea.innerText;
        store(listName);
        taskArea.blur();
        window.location.reload();
      }
    });
  });
};

export default makeTaskEditable;