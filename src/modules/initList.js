export default () => {
  let listName = [];
  listName = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];

  return listName;
};
