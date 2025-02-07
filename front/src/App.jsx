import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from './components/auth/login'
import Register from './components/auth/register'
import './App.css'

function App() {
  return [<Login key="login"/>, <Register key="register"/>]
}

export default App
