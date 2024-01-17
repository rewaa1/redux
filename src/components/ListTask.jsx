// ListTask.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import Task from './Task';

const ListTask = ({ tasks }) => {
  const [filter, setFilter] = useState('all');

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'all') return true;
    return filter === 'done' ? task.isDone : !task.isDone;
  });

  return (
    <div>
      <div className="mb-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded mr-2"
          onClick={() => setFilter('done')}
        >
          Done
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={() => setFilter('notDone')}
        >
          Not Done
        </button>
      </div>
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

export default connect(mapStateToProps)(ListTask);
