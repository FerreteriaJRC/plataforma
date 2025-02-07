import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from './components/auth/login'
import Register from './components/auth/register'
import Navbar from './components/navBar/navbar'
import './App.css'

function App() {
  const isRegister = true;

  const [charcaters, setCharacters] = useState([
    {id: 1, name: 'jhon', age: 25},
    {id: 2, name: 'Doe', age: 30},
    {id: 3, name: 'Smith', age: 35},
  ])

  const addCharacter = () => {
    setCharacters([...charcaters, {id: 4, name: 'New', age: 40}])
  }

  const modifyName = () => {
    charcaters[0].name = 'Jhon Darwin';
    setCharacters([...charcaters])
  }

  return (
    <>
      {isRegister ? <Register /> : <Login />}
    </>
  )
    
    
}
export default App
