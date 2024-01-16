// App.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddTask from './AddList';
import ListTask from './ListTask';
import { Box, Center, Text, Button, Flex } from '@chakra-ui/react';

const App = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks);
  const [filter, setFilter] = useState('all');
  
  const handleEdit = (taskId, newDescription) => {
    dispatch({ type: 'EDIT_TASK', payload: { id: taskId, description: newDescription } });
  };

  const handleToggle = (taskId) => {
    dispatch({ type: 'TOGGLE_TASK', payload: taskId });
  };

  const handleAdd = (newTask) => {
    dispatch({ type: 'ADD_TASK', payload: { description: newTask, isDone: false } });
  };

  return (
    <div>
      <Box w="100%" h="60px" bg="blue.400" textAlign="center" > 
        <Text as='b' fontSize="x-large">ToDo App</Text>
      </Box>
      <AddTask onAdd={handleAdd} />
      <Box display="flex" justifyContent="space-between" maxW="25%" padding={4}>
      <Button onClick={() => setFilter('all')} marginRight={2}>
        All
      </Button>
      <Button onClick={() => setFilter('done')} marginRight={2}>
        Done
      </Button>
      <Button onClick={() => setFilter('notDone')}>
        Not Done
      </Button>
      </Box>
      <Box 
      h="100vh"
      display="flex"
      justifyContent="center"
      >
        <ListTask tasks={tasks} filter={filter} onToggle={handleToggle} onEdit={handleEdit} />
      </Box>
    </div>
  );
};

export default App;
