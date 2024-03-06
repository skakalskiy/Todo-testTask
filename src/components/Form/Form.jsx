import React from 'react';
import PropTypes from 'prop-types';

import './Form.scss';

const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();
        if (inputText.length <= 3) {
            alert('length must be more than 3 characters');
           
        } else {
            setTodos([...todos, { text: inputText, completed: false, id: Math.random() * 50}]);
            setInputText('');
        }
    };

    const statusHandler = (e) => {
       setStatus(e.target.value);
    };

    const completedCount = todos.filter(todo => todo.completed).length;
    const uncompletedCount = todos.filter(todo => !todo.completed).length;


  return (
    <form className='form'>
        <input value={inputText} onChange={inputTextHandler} type='text' className='todo-input' placeholder='add task'/>
        <button onClick={submitTodoHandler} className='todo-button' type='submit'>+</button>
        <div className='select'>
            <select onChange={statusHandler} name="totos" className='filter-todo'>
                <option value="all">All ({todos.length})</option>
                <option value="completed">Completed  ({completedCount})</option>
                <option value="uncompleted">Uncompleted  ({uncompletedCount})</option>
            </select>
        </div>
    </form>
  );
};

Form.propTypes = {
    setInputText: PropTypes.func.isRequired,
    todos: PropTypes.array.isRequired,
    setTodos: PropTypes.func.isRequired,
    inputText: PropTypes.string.isRequired,
    setStatus: PropTypes.func.isRequired,
};

export default Form;
