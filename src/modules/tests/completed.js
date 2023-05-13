const makeTaskEditable = (taskAreas, listName, store) => {
  taskAreas.forEach((taskArea, index) => {
    taskArea.addEventListener('blur', () => {
      listName[index].text = taskArea.innerText;
      store(listName);
    });
  });
};

const checkStatus = (checkboxes, listName) => checkboxes.map((checkbox, index) => ({
  ...listName[index],
  completed: checkbox.checked,
}));

const clearCompleted = (listName) => {
  const filteredList = listName.filter((item) => item.completed === false);
  return filteredList;
};

module.exports = { checkStatus, clearCompleted, makeTaskEditable };