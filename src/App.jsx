import { useState } from 'react'
import './App.css'
import CreateTodo from './components/CreateTodo'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AllTodo from './components/AllTodo'
import Nav from './components/Nav'
import EditTodo from './components/EditTodo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Nav />
     <Routes>
      <Route path='/' element={<AllTodo />}/>
      <Route path='/create' element={<CreateTodo/>}/>
      <Route path='/edit/:id' element={<EditTodo/>}/>
     </Routes>
    </Router>
  )
}

export default App
