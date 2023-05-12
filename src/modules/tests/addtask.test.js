import { addTask } from './addAndRemove.js';

describe('addTask', () => {
  test('should add a task to an empty list', () => {
    const task = 'Task 1';
    const list = [];
    const expected = [
      {
        completed: false,
        text: task,
        index: 1,
      },
    ];

    const result = addTask(task, list);

    expect(result).toEqual(expected);
  });

  test('should add a task to a non-empty list', () => {
    const task = 'Task 2';
    const list = [
      {
        completed: false,
        text: 'Task 1',
        index: 1,
      },
    ];
    const expected = [
      {
        completed: false,
        text: 'Task 1',
        index: 1,
      },
      {
        completed: false,
        text: task,
        index: 2,
      },
    ];

    const result = addTask(task, list);

    expect(result).toEqual(expected);
  });
});
