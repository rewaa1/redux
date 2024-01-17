// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import AddTask from './components/AddList';
import ListTask from './components/ListTask';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Todo App</h1>
        <AddTask />
        <ListTask />
      </div>
    </Provider>
  );
};

export default App;
