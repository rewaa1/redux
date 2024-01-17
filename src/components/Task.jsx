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
    <div className="border rounded p-4 mb-4 bg-white shadow-md">
      <div className="flex items-center justify-between mb-2">
        <span
          className={`flex-1 text-xl ${task.isDone ? 'line-through text-gray-500' : 'font-semibold'} `}
        >
          {task.description}
        </span>
        <div className="flex gap-2">
          <button
            className={`bg-${task.isDone ? 'orange' : 'green'}-500 text-white px-3 py-1 rounded-full`}
            onClick={handleToggle}
          >
            {task.isDone ? 'Undo' : 'Done'}
          </button>
          <button
            className="bg-indigo-500 text-white px-3 py-1 rounded-full"
            onClick={handleEdit}
          >
            Edit
          </button>
          <button
            className="bg-red-500 text-white px-3 py-1 rounded-full"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { toggleTask, deleteTask, editTask })(Task);
