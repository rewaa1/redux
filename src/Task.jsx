// Task.js
import { Button, Input } from '@chakra-ui/react';
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
          <Input 
            maxW="25%"
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
          <Button onClick={handleEdit}>Confirm Edit</Button>
        </>
      ) : (
        <>
          <span>{task.description}</span>
          <Button mx="20px" onClick={() => setEditing(true)}>Edit</Button>
        </>
      )}
    </div>
  );
};

export default Task;
