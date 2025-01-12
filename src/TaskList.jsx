import React from 'react';
import { useTasks } from './TaskContext';

const TaskList = () => {
  const { state, dispatch } = useTasks();

  const handleToggleTask = (id) => {
    dispatch({ type: 'TOGGLE_TASK', payload: id });
  };

  const handleRemoveTask = (id) => {
    dispatch({ type: 'REMOVE_TASK', payload: id });
  };

  return (
    <ul>
      {state.map((task) => (
        <li key={task.id}>
          <span
            onClick={() => handleToggleTask(task.id)}
            style={{
              textDecoration: task.completed ? 'line-through' : 'none',
              cursor: 'pointer',
            }}
          >
            {task.text}
          </span>
          <button onClick={() => handleRemoveTask(task.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
