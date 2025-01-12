import React from 'react';
import { TaskProvider } from './TaskContext';
import AddTask from './AddTask';
import TaskList from './TaskList';

const App = () => {
  return (
    <TaskProvider>
      <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
        <h1>Task Manager</h1>
        <AddTask />
        <TaskList />
      </div>
    </TaskProvider>
  );
};

export default App;
