// UseMemo.js
import React, { useMemo } from 'react';

const UseMemo = ({ todos }) => {
  const expensiveCalculation = useMemo(() => {
    console.log('Expensive calculation running');
    return todos.filter(todo => todo.task.includes('New'));
  }, [todos]);

  return (
    <div>
      <h3>Memoized Todos with "New" in their task:</h3>
      <ul>
        {expensiveCalculation.map(todo => (
          <li key={todo.id}>{todo.task}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseMemo;

