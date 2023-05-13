const { makeTaskEditable, clearCompleted } = require('./completed.js');

test('makeTaskEditable updates listName and calls store', () => {
  const taskAreaMock = {
    innerText: 'Task 1',
    addEventListener: jest.fn(),
  };

  // Create a mock listName array
  const listName = [{ text: '' }];

  const store = jest.fn();

  makeTaskEditable([taskAreaMock], listName, store);

  taskAreaMock.addEventListener.mock.calls[0][1]();

  expect(listName[0].text).toBe('Task 1');
  expect(store).toHaveBeenCalledWith(listName);
});

describe('clearCompleted', () => {
  test('should remove completed items from the list', () => {
    const listName = [
      { id: 1, completed: true },
      { id: 2, completed: false },
      { id: 3, completed: true },
    ];

    const filteredList = clearCompleted(listName);

    expect(filteredList).toEqual([
      { id: 2, completed: false },
    ]);
  });
});