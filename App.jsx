import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { TodoList } from './components/TodoList.jsx'

function App() {
  return (
    <div className="App">
    <TodoList />
    </div>
  )  
}

export default App
