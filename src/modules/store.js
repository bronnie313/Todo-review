const store = (listName) => {
  localStorage.setItem('tasks', JSON.stringify(listName));
};

export default store;