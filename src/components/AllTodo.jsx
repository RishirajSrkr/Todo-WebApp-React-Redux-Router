import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

//css
import '../styles/alltodo.css'
import { removeTodo } from '../redux/todoSlice';

export default function AllTodo() {

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo);
  console.log(todos)


  const removeHandler = (todo) => {
    dispatch(removeTodo(todo.id))
  }

  if (todos === null) {

  }

  return (
    <div className='alltodoWrapper'>

      {todos.length === 0 ? <p className='ptag'>Create your first Todo...</p> : (

        todos.map((todo) => (
          <div key={todo.id}>
            <h4>{todo.text}</h4>

            <div className='btns'>

              <Link to={`/edit/${todo.id}`}>
                <button>Edit</button>
              </Link>

              <button
                onClick={() => removeHandler(todo)}
              >Delete</button>
            </div>

          </div>
        ))
      )}

    </div>
  )
}
