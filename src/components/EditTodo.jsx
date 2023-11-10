import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux';
import { editTodo } from '../redux/todoSlice'

export default function EditTodo() {

  const [todoText, setTodoText] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const todos = useSelector((state) => state.todo);

  const todoToEdit = todos.find((todo) => todo.id === id);

  const editHandler = () => {
    dispatch(editTodo({ text: todoText, id }))
    navigate('/')
  }

  useEffect(() => {
    if (todoToEdit) {
      setTodoText(todoToEdit.text);
    }
  }, [todoToEdit])


  return (
    <div className='createMain'>

      <div className='create-wrapper'>
        <input
          type="text"
          placeholder='write here...'
          onChange={(e) => setTodoText(e.target.value)}
          value={todoText}
        />

        <button
          onClick={editHandler}
        >
          Update Todo</button>
      </div>
    </div>

  )
}
