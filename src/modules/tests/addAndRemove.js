const addTask = (task, list) => {
  const newData = {
    completed: false,
    text: task,
    index: list.length + 1,
  };
  const newList = [...list, newData];
  return newList;
};

const removeTask = (index, list) => {
  const newList = [...list];
  newList.splice(index, 1);
  return newList;
};

module.exports = { addTask, removeTask };