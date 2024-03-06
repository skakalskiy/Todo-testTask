import React from 'react';
import PropTypes from 'prop-types';

import './Todo.scss';

const Todo = ({ text, setTodos, todos, todo }) => {

    const deleteHandler = () => {
        setTodos(todos.filter(item => item.id !== todo.id));
    };
    const completeHandler = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return { ...item, completed: !item.completed };
            }
            return item;
            
        }));  
    };

  return (
    <div className='todo'>
        <li className={`todo-item ${todo.completed ? 'completed' : ''}`}  onClick={completeHandler}>
            {text}    
        </li>
        <div>
            <button onClick={deleteHandler}>Delete</button>
        </div>
    </div>
  );
};

Todo.propTypes = {
    text: PropTypes.string.isRequired,
    setTodos: PropTypes.func.isRequired,
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
       todo: PropTypes.object.isRequired
};

export default Todo;