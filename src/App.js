import React from 'react';
import './App.css';
import TasksList from './features/tasks/TasksList';
import Clock from './components/Clock';
import { nanoid } from '@reduxjs/toolkit';
import { useGetPickQuery } from './api/pickApi';
function App() {

  const { data, error, isLoading } = useGetPickQuery('')
  console.log(data)
  let styles = {}


  return (
    <main className='main'>
      <Clock />
      <TasksList key={nanoid()} />
    </main>
  );
}

export default App;
