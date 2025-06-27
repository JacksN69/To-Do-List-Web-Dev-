import React from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import useLocalStorage from './hooks/useLocalStorage';
import './styles/App.css';
import { LOCAL_STORAGE_KEY } from './constants';

const App = () => {
  const [tasks, setTasks] = useLocalStorage(LOCAL_STORAGE_KEY, []);

  const addTask = (label) => {
    const newTask = {
      id: Date.now(),
      label,
    };
    setTasks([...tasks, newTask]);
  };

  const editTask = (id, newLabel) => {
    const updated = tasks.map((task) =>
      task.id === id ? { ...task, label: newLabel } : task
    );
    setTasks(updated);
  };

  const deleteTask = (id) => {
    const filtered = tasks.filter((task) => task.id !== id);
    setTasks(filtered);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">📝 Ma ToDo List</h2>
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onEdit={editTask} onDelete={deleteTask} />
    </div>
  );
};

export default App;
