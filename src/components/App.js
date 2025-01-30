<p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>

// App.js
import React, { useState, useEffect, useMemo } from 'react';
import UseMemo from './UseMemo';
import ReactMemo from './ReactMemo';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [counter, setCounter] = useState(0);
  const [newTask, setNewTask] = useState('');
  
  // Adding "New todo" when the Add Todo button is clicked
  const addTodo = () => {
    setTodos(prevTodos => [...prevTodos, { id: prevTodos.length, task: 'New todo' }]);
  };

  // Increment counter
  const incrementCounter = () => {
    setCounter(prevCounter => prevCounter + 1);
  };

  // Handling task input change
  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  // Add custom task to the list
  const addCustomTask = () => {
    if (newTask.length > 5) {
      setTodos(prevTodos => [...prevTodos, { id: prevTodos.length, task: newTask }]);
      setNewTask('');
    } else {
      alert('Task must be more than 5 characters');
    }
  };

  useEffect(() => {
    // This can be used for any side-effects like fetching data or logging
    console.log('Component rendered or updated');
  }, [todos, counter]);

  // UseMemo to memoize a filtered list of todos that contain more than 5 characters
  const filteredTodos = useMemo(() => {
    return todos.filter(todo => todo.task.length > 5);
  }, [todos]);

  return (
    <div>
      <h1>Task Manager</h1>
      
      <button onClick={addTodo}>Add Todo</button>
      <button onClick={incrementCounter}>Increment Counter</button>
      
      <div>
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Enter a custom task"
        />
        <button onClick={addCustomTask}>Submit Custom Task</button>
      </div>

      <h3>Counter: {counter}</h3>

      <h3>Todos:</h3>
      <ul>
        {filteredTodos.map(todo => (
          <ReactMemo key={todo.id} task={todo.task} />
        ))}
      </ul>

      <UseMemo todos={filteredTodos} />
    </div>
  );
};

export default App;


