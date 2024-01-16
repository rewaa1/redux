// App.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddTask from './AddList';
import ListTask from './ListTask';

const App = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks);
  const [filter, setFilter] = useState('all');
  
  const handleEdit = (taskId, newDescription) => {
    dispatch({ type: 'EDIT_TASK', payload: { id: taskId, description: newDescription } });
  };

  const handleToggle = (taskId) => {
    dispatch({ type: 'TOGGLE_TASK', payload: taskId });
  };

  const handleAdd = (newTask) => {
    dispatch({ type: 'ADD_TASK', payload: { description: newTask, isDone: false } });
  };

  return (
    <div>
      <h1>ToDo App</h1>
      <AddTask onAdd={handleAdd} />
      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('done')}>Done</button>
        <button onClick={() => setFilter('notDone')}>Not Done</button>
      </div>
      <ListTask tasks={tasks} filter={filter} onToggle={handleToggle} onEdit={handleEdit} />
    </div>
  );
};

export default App;
