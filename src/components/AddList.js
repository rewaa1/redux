// AddTask.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../action/actions';

const AddTask = ({ addTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleAdd = () => {
    if (newTask.trim() !== '') {
      addTask(newTask);
      setNewTask('');
    }
  };

  return (
    <div className="mb-4">
      <input
        className="border border-gray-300 p-2"
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter a new task"
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 ml-2"
        onClick={handleAdd}
      >
        Add Task
      </button>
    </div>
  );
};

export default connect(null, { addTask })(AddTask);
