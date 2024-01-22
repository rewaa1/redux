// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import AddTask from './components/AddList';
import ListTask from './components/ListTask';
import './index.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className=' bg-black'>
        <h1 className=' text-cyan-500'>Todo App</h1>
        
        <AddTask />
        <ListTask />
        </div>
     
    </Provider>
  );
};

export default App;
