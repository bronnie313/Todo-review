import { addTask, removeTask } from './addAndRemove.js';

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

describe('removeTask', () => {
  test('should remove a task from a list', () => {
    const index = 1;
    const list = [
      {
        completed: false,
        text: 'Task 1',
        index: 1,
      },
      {
        completed: false,
        text: 'Task 2',
        index: 2,
      },
      {
        completed: false,
        text: 'Task 3',
        index: 3,
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
        text: 'Task 3',
        index: 3,
      },
    ];

    const result = removeTask(index, list);

    expect(result).toEqual(expected);
  });

  test('should not modify the original list', () => {
    const index = 1;
    const list = [
      {
        completed: false,
        text: 'Task 1',
        index: 1,
      },
      {
        completed: false,
        text: 'Task 2',
        index: 2,
      },
      {
        completed: false,
        text: 'Task 3',
        index: 3,
      },
    ];

    const result = removeTask(index, list);

    expect(result).not.toBe(list);
  });
});