import React, { useState } from 'react';
import PropTypes from 'prop-types';

function TodoForm({ addTask }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Escribe una tarea..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Agregar</button>
    </form>
  );
}

TodoForm.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default TodoForm;
 
