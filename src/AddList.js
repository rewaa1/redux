// AddTask.js
import { Button, Input } from '@chakra-ui/react';
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
      <Input
        maxW="25%"
        type="text"
        value={newTask}
        onChange={e => setNewTask(e.target.value)}
      />
      <Button onClick={handleAdd}>Add Task</Button>
    </div>
  );
};

export default AddTask;
