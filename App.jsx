import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { TodoList } from './components/TodoList.jsx'

export const App = () => {
  return (
    <div className="App">
      <TodoList />
    </div>
  )
};


