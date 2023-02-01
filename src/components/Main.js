import React, { useState } from 'react';
import { getTodos, addTodo } from '../services/client.js';

export default function Main() {
  const [todos, setTodos] = useState('');
  setTodos(getTodos());
  return <div>{todos}</div>;
}
