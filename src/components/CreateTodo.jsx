import React, { useState } from 'react'
import '../styles/createTodo.css'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/todoSlice'
import { nanoid } from '@reduxjs/toolkit'
import { useNavigate } from 'react-router'

export default function CreateTodo() {

    const [todoText, setTodoText] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const createHandler = () => {
        dispatch(addTodo({ text: todoText, id: nanoid() }))
        navigate('/');
    
    }


    return (
        <div className='createMain'>

            <div className='create-wrapper'>
                <input type="text" id='inputTodo' placeholder='write here...'
                    onChange={(e) => setTodoText(e.target.value)}
                />

                <button
                    onClick={createHandler}
                >Add Todo</button>
            </div>
        </div>

    )
}
