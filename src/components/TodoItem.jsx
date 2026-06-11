import React from 'react';

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className="todo-item">
      <div className="todo-content">
        <input
          type="checkbox"
          className="todo-checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          aria-label={`Toggle completion for ${todo.text}`}
        />
        <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
          {todo.text}
        </span>
      </div>
      <button
        className="delete-button"
        onClick={() => onDelete(todo.id)}
        aria-label={`Delete task ${todo.text}`}
      >
        🗑️
      </button>
    </li>
  );
}

export default TodoItem;
