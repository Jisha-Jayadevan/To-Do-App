import React from 'react'
import { useSelector } from 'react-redux';
import TodoItem from '../components/TodoItem';

function TodoList() {
  const todos = useSelector((state) => state.toDoSlice.list);

  return (
    <> 
    {todos?.length>0?<p className='fw-bolder text-success'>** Mark if task is completed</p>:''}
    <ul>
      {todos?.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
    </>

  )
}

export default TodoList