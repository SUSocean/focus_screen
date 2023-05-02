import React from 'react';
import './App.css';
import TasksList from './features/tasks/TasksList';
import Clock from './components/Clock';
import Weather from './components/Weather';
import { nanoid } from '@reduxjs/toolkit';
import { useGetPickQuery } from './api/pickApi';

function App() {
  const { data } = useGetPickQuery()
  console.log(data)

  let author = null
  let imgUrl = null
  if (data) {
    imgUrl = data.urls.full
    author = data.user.name
  }
  const styles = {
    backgroundImage: `url(${imgUrl})`
  }

  return (
    <main style={styles} className='main'>
      <Clock />
      <Weather />
      <TasksList key={nanoid()} />
      {author && <p className='author'>photo by: {author}</p>}
    </main>
  );
}

export default App;
