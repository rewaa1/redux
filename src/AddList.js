// AddTask.js
import React, { useState } from 'react';

const AddTask = ({ onAdd }) => {
  const [newTask, setNewTask] = useState('');

  const handleAdd = () => {
    console.log('onAdd:', onAdd);
    if (newTask.trim() !== '') {
      onAdd(newTask);
      setNewTask('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newTask}
        onChange={e => setNewTask(e.target.value)}
      />
      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
};

export default AddTask;
