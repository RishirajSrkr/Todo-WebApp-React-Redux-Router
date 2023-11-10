import { createSlice, nanoid } from '@reduxjs/toolkit'



function loadFromLocalStorage() {
    const str = localStorage.getItem('todos')
    return str ? JSON.parse(str) : []
}

function saveToLocalStorage(todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}



const todoSlice = createSlice({
    name: "Todo",
    initialState: loadFromLocalStorage(),
    reducers: {
        addTodo: (state, action) => {
            const { text, id } = action.payload;
            const todo = {
                text: text,
                id: id
            }
            state.push(todo)
            saveToLocalStorage(state)
        },
        removeTodo: (state, action) => {

            const id = action.payload;
            const filteredState = state.filter((todo) => todo.id !== id);
            saveToLocalStorage(filteredState);
            return filteredState;

        },

        editTodo: (state, action) => {
            const { text, id } = action.payload;
            const todoedit = state.find((todo) => todo.id === id);
            if (todoedit) {
                todoedit.text = text;
            }
            saveToLocalStorage(state);


        }
    }
})

export const { addTodo, removeTodo, editTodo } = todoSlice.actions
export default todoSlice.reducer