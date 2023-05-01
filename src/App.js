import React from 'react';
import './App.css';
import TasksList from './features/tasks/TasksList';
import { nanoid } from '@reduxjs/toolkit';
function App() {
  return (
    <main className='main'>
      <TasksList key={nanoid()} />
    </main>
  );
}

export default App;
