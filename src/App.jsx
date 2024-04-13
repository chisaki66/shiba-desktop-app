import './App.scss';
import { useState } from 'react';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  const handleNewTask = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (task === '') return;
    setTodos((todos) => [...todos, { task, isCompleted: false }]);
    setTask('');
  };

  const handleRemoveTask = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleUpdateTask = (index) => {
    const newTodos = todos.map((todo, todoIndex) => {
      if (todoIndex === index) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <div>
      <header className="header"></header>
      <main className="main">
        <form className="form" onSubmit={handleSubmit}>
          <input className="form__input" value={task} placeholder="タスクを入力..." onChange={handleNewTask} />
        </form>
        <ul className="list">
          {todos.map((todo, index) => (
            <li
              className="list__item"
              key={index}
              style={{
                textDecoration: todo.isCompleted ? 'line-through' : 'none',
              }}
            >
              <input
                type="checkbox"
                checked={todo.isCompleted}
                onChange={() => handleUpdateTask(index)}
              />
              {todo.task}
              <div className="actionButton" onClick={() => handleRemoveTask(index)} style={{ cursor: 'pointer' }}>
                X
              </div>
            </li>
          ))}
        </ul>
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
