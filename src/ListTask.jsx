// ListTask.js
import React from 'react';
import Task from './Task';
import { Box } from '@chakra-ui/react';

const ListTask = ({ tasks, filter, onToggle, onEdit }) => {
  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') {
      return true;
    } else if (filter === 'done') {
      return task.isDone;
    } else {
      return !task.isDone;
    }
  });

  return (
    <Box>
      {filteredTasks.map(task => (
        <Task key={task.id} task={task} onToggle={onToggle} onEdit={onEdit} />
      ))}
    </Box>
  );
};

export default ListTask;
