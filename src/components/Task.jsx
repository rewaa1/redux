// Task.js
import React from 'react';
import { connect } from 'react-redux';
import { toggleTask, deleteTask, editTask } from '../action/actions';

const Task = ({ task, toggleTask, deleteTask, editTask }) => {
  const handleToggle = () => {
    toggleTask(task.id);
  };

  const handleDelete = () => {
    deleteTask(task.id);
  };

  const handleEdit = () => {
    const newDescription = prompt('Enter new description:', task.description);
    if (newDescription !== null) {
      editTask(task.id, newDescription);
    }
  };

  return (
    <div className="flex items-center justify-between border p-2 mb-2 bg-gray-100 rounded">
      <span
        className={`flex-1 ${task.isDone ? 'line-through text-gray-500' : ''}`}
      >
        {task.description}
      </span>
      <div>
        <button
          className={`bg-${task.isDone ? 'yellow' : 'green'}-500 text-white px-3 py-1 rounded mr-2`}
          onClick={handleToggle}
        >
          {task.isDone ? 'Undo' : 'Done'}
        </button>
        <button
          className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
          onClick={handleEdit}
        >
          Edit
        </button>
        <button
          className="bg-red-500 text-white px-3 py-1 rounded"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default connect(null, { toggleTask, deleteTask, editTask })(Task);
