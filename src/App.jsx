import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteCompletedTodos } from './slice/toDoSlice';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  const handleDeleteCompletedTodos = () => {
    dispatch(deleteCompletedTodos());
  };

  const completedTodos = useSelector((state) =>
    state.toDoSlice.list.filter((todo) => todo.completed)
  );

  return (
    <div className='container w-100 mt-5'>
      <div style={{height:'500px', background: '#f4f4f4',margin:'0 auto'}}  className='d-flex flex-column justify-content-center align-items-center w-70  shadow rounded'>
      <h1 className='fw-bolder mb-5'>To-Do App</h1>
      <TodoForm />
      <TodoList />
      <div className='text-center'>
        <p className='fw-bolder'>Completed Todos: {completedTodos.length}</p>
        <button className='btn btn-primary' onClick={handleDeleteCompletedTodos}>Delete all Completed Items</button>
      </div>
      </div>
    </div>
  );

}

export default App
