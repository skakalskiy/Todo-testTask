import React from 'react';
import PropTypes from 'prop-types';

import Todo from '../Todo/Todo';

const TodoList = ({ todos, setTodos, todo, filteredTodos }) => {
  return (
    <div className='todo-container'>
        <ul className='todo-list'>
            {filteredTodos.map((todo) => (
            <Todo setTodos={setTodos} todos={todos} key={todo.id} text={todo.text} todo={todo}/>  
            ))}
        </ul>
    </div>
  );
};

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    setTodos: PropTypes.func.isRequired,
    todo: PropTypes.object.isRequired,
    filteredTodos:  PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default TodoList;