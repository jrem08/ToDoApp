import React, { useState } from 'react';
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    if (text.trim() === '') return;
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([newTask, ...tasks]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    if (window.confirm("¿Eliminar esta tarea?")) {
      setTasks(tasks.filter(task => task.id !== id));
    }
  };

  const completedCount = tasks.filter(task => task.completed).length;
  const pendingCount = tasks.length - completedCount;

  return (
    <div className="container">
      <h1>App ToDo</h1>
      <TodoForm addTask={addTask} />
      <TodoList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
      <div className="stats">
        <p>Total: {tasks.length}</p>
        <p>Completadas: {completedCount}</p>
        <p>Pendientes: {pendingCount}</p>
      </div>
    </div>
  );
}

export default App;

