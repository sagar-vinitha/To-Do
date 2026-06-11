import React, { useState } from 'react';

function TodoForm({ onAddTodo }) {
  const [inputValue, setInputValue] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate input
    if (inputValue.trim() === '') {
      alert('Please enter a task');
      return;
    }

    // Add todo and clear input
    onAddTodo(inputValue.trim());
    setInputValue('');
  };

  // Handle input change
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Add a new task..."
        value={inputValue}
        onChange={handleChange}
      />
      <button type="submit" className="add-button">
        ➕ Add
      </button>
    </form>
  );
}

export default TodoForm;
