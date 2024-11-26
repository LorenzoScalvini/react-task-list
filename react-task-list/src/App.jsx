import { useState } from 'react'
import './App.css'
import tasks from '../data/tasks'

function App() {
    const inProgressTasks = tasks.filter(task => task.state === 'in_progress');
    const completedTasks = tasks.filter(task => task.state === 'completed');

  return (
    <>
      <div className='title'>
        <h1>Task manager</h1>
      </div>

      <div className='todo-lists'>
        <div className='in-progress'>
          <h3 className='section-title'>Current tasks</h3>
          <ul>
            {inProgressTasks.map(task => (
              <li key={task.id}><strong className='task-title'>{task.title}</strong>
              <ul>
                <li>Priority: {task.priority}</li>
                <li>Est time: {task.estimatedTime}</li>
              </ul>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Copleted tasks</h3>
        </div>
      </div>
    </>
  )
}

export default App
