import React, { useState, useEffect } from 'react';

import Form from './components/Form/Form';
import TodoList from './components/TodoList/TodoList';


function App() {

  const [inputText, setInputText] = useState(''); 
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  
  const filterHandler = () => {
    if (status === 'completed') {
      setFilteredTodos(todos.filter((item) => item.completed));
  } else if (status === 'uncompleted') {
      setFilteredTodos(todos.filter((item) => !item.completed));
  } else {
      setFilteredTodos(todos);
  } 
  };

  useEffect(() => {
    filterHandler();
  },[todos, status]);

  return (
    <div className='App'>
      <h1>
        Add Task
      </h1>
      <Form  inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} setStatus={setStatus}/>
      <TodoList filteredTodos={filteredTodos} setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
