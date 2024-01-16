// ListTask.js
import React from 'react';
import Task from './Task';

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
    <div>
      {filteredTasks.map(task => (
        <Task key={task.id} task={task} onToggle={onToggle} onEdit={onEdit} />
      ))}
    </div>
  );
};

export default ListTask;
