import React from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../slice/toDoSlice';
import { useState } from 'react';

function TodoForm() {
    const [todoText, setTodoText] = useState('');
    const dispatch = useDispatch();
  
    const handleAddTodo = () => {
      if (todoText.trim() !== '') {
        dispatch(addTodo({ text: todoText }));
        setTodoText('');
      }
    };
  
    return (
      <div>
        <input className='rounded m-2 p-2'
          type="text"
          placeholder="Add a todo"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button className='btn btn-primary btn-outline p-2' onClick={handleAddTodo}>Add</button>
      </div>
  )
}

export default TodoForm