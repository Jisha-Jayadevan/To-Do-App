import React from 'react'
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo, markTodoCompleted  } from '../slice/toDoSlice';

function TodoItem({ todo }) {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo({ id: todo.id }));
  };

  const handleDelete = () => {
    dispatch(deleteTodo({ id: todo.id }));
  };

  // const handleMarkCompleted = () => {
  //   dispatch(markTodoCompleted({ id: todo.id }));
  // };

  return (
    <>
    <div className='d-flex w-100 justify-content-between align-items-center'> 
   <input
      type="checkbox"
      checked={todo.completed}
      onChange={handleToggle}
      style={{ marginRight: '8px' }}
    />
    <span className='fs-2' style={{ textDecoration: todo.completed ? 'solid underline purple 4px' : 'none' }}>
      {todo.text}
    </span>&emsp;
    {/* <button onClick={handleMarkCompleted} disabled={todo.completed}>
      Mark Completed
    </button> */}
    <button className='btn btn-danger p-1' onClick={handleDelete}>Delete</button></div>
    </>
   

  )
}

export default TodoItem