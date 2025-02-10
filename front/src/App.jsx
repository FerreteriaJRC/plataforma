import Login from './components/auth/login'
import Register from './components/auth/register'
import Navbar from './components/layout/NavBar'
import  Home  from './components/home/Home'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/home' element={<Home />}></Route>
      </Routes>
    </div>
  ) 
}

export default App
