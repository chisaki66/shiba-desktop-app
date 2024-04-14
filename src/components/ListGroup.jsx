import './ListGroup.scss';
import { useState } from 'react';

const ListGroup = () => {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (task === '') return;
    setTodos((todos) => [...todos, { task, isCompleted: false }]);
    setTask('');
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

  const handleEditTask = (index, newName) => {
    const updatedTasks = [...todos];
    updatedTasks[index].task = newName;
    setTodos(updatedTasks);
  };

  const handleRemoveTask = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  
  return (
    <>
      <main className="main">
        <form className="form" onSubmit={handleSubmit}>
          <input
            className="form__input"
            value={task}
            placeholder="タスクを入力..."
            onChange={(event) => setTask(event.target.value)}
          />
        </form>
        <ul className="list">
          {todos.map((todo, index) => (
            <li className="list__item" key={index}>
              <input
                type="checkbox"
                checked={todo.isCompleted}
                onChange={() => handleUpdateTask(index)}
              />
              {todo.isCompleted ? (
                <span className="list__done-list-item">{todo.task}</span>
              ) : (
                <input
                  className="list__input-list-item"
                  value={todo.task}
                  onChange={(event) => handleEditTask(index, event.target.value)}
                />
              )}
              <div
                className="list__action-button"
                onClick={() => handleRemoveTask(index)}
                style={{ cursor: 'pointer' }}
              >
                X
              </div>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default ListGroup;
