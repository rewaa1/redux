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
    <div className="flex items-center justify-center h-20 bg-blue-500 text-white">
      <input
        className="border border-gray-300 text-black p-2 rounded-l w-64"
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter a new task"
      />
      <button
        className="bg-white text-blue-500 px-4 py-2 rounded-r"
        onClick={handleAdd}
      >
        Add Task
      </button>
    </div>
  );
};

export default connect(null, { addTask })(AddTask);
