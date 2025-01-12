import React, { useState } from 'react';
import { useTasks } from './TaskContext';

const AddTask = () => {
  const [input, setInput] = useState('');
  const { dispatch } = useTasks();

  const handleAddTask = () => {
    if (input.trim()) {
      dispatch({ type: 'ADD_TASK', payload: input });
      setInput('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTask;
