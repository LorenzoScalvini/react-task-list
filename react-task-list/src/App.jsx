import { useState } from 'react'
import './App.css'
import tasks from '../data/tasks'

function App() {
  const inProgressTasks = tasks.filter(task => task.state === 'in_progress' || task.state === 'backlog');
  const completedTasks = tasks.filter(task => task.state === 'completed');

  return (
    <>
    <div className='title'>
      <h1>Task manager</h1>
    </div>

    <div className='todo-lists'>
      <div className='tasks-list'>
        <h3 className='section-title'>Current tasks: </h3>
        <ul>
          {inProgressTasks.map(task => (
            <li key={task.id}>
              <strong className='task-title'>
                {task.title}
                <span className={`task-state ${task.state}`}>
                  {task.state.charAt(0).toUpperCase() + task.state.slice(1)}
                </span>
              </strong>
              <ul>
                <li>Priority: {task.priority}</li>
                <li>Est time: {task.estimatedTime}</li>
              </ul>
            </li>
          ))}
        </ul>
      </div>

      <div className='tasks-list'>
        <h3 className='section-title'>Completed tasks: </h3>
        <ul>
          {completedTasks.map(task => (
            <li key={task.id}>
              <strong className='task-title'>
                {task.title}
                <span className={`task-state ${task.state}`}>
                  {task.state.charAt(0).toUpperCase() + task.state.slice(1)}
                </span>
              </strong>
              <ul>
                <li>Priority: {task.priority}</li>
                <li>Est time: {task.estimatedTime}</li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </>
  )
}

export default App
