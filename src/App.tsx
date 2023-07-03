import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar';
import { Provider } from 'react-redux';
import Counter from './Counter';
import TodoMain from './TodoList/TodoMain';



function App() {
  return (
    <div className="App" >
    <div style={{'display':'flex'}}>
      <Sidebar />
      <Counter />
      <TodoMain />
      </div>  
    </div>
  );
}

export default App;
