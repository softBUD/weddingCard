import React, { createContext, useState } from 'react'
import './index.css'
import './assets/css/font.css'
import Home from './components/home'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home></Home>
      </header>
    </div>
  )
}

export default App
