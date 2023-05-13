const { makeTaskEditable } = require('./completed.js');

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
