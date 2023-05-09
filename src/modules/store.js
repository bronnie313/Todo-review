import initList from './initList.js';

export default () => {
  const listName = initList();

  const store = () => {
    localStorage.setItem('tasks', JSON.stringify(listName));
  };

  return store;
};
