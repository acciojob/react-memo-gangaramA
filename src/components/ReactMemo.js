// ReactMemo.js
import React from 'react';

const ReactMemo = React.memo(({ task }) => {
  console.log('Rendering task:', task);
  return <li>{task}</li>;
});

export default ReactMemo;

