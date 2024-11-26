import { useState } from 'react'
import './App.css'
import tasks from '../data/tasks'

function App() {
  const tasksToDo = tasks.filter(task => task.state === 'backlog' || task.state === 'in_progress');
  
  return (
    <>
      <div className='title'>
        <h1>Task manager</h1>
      </div>

      <div>
        <h3>Current tasks</h3>
      </div>

      <div>
        <h3>Copleted tasks</h3>
      </div>
    </>
  )
}

export default App
