// Task.js
import React, { useState } from 'react';

const Task = ({ task, onToggle, onEdit }) => {
  const [isEditing, setEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const handleEdit = () => {
    onEdit(task.id, editedDescription);
    setEditing(false);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={() => onToggle(task.id)}
      />
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
          <button onClick={handleEdit}>Confirm Edit</button>
        </>
      ) : (
        <>
          <span>{task.description}</span>
          <button onClick={() => setEditing(true)}>Edit</button>
        </>
      )}
    </div>
  );
};

export default Task;
