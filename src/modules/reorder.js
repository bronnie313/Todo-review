const reorder = (listName) => {
  listName.forEach((item, index) => {
    item.index = index + 1;
  });
};

export default reorder;