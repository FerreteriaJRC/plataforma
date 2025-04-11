"use client";

import 'tailwindscss';
import React from 'react';
import {ILoginRequest, ILoginResponse, ILoginErrors} from '../../interfaces/interfaces'
import { useState } from 'react';
import { login } from '../../helpers/auth.helper';
import { useNavigate } from 'react-router-dom';
import { Route } from 'react-router-dom';


const Login = () => {
  const [formData, setFormData] = useState<ILoginRequest>({username: "", password: ""});
  const navigate = useNavigate();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { username, password } = formData;
    console.log(username, password);
    const response = await login(formData);
    if(response){
      alert("Login successful!");
      navigate('/home');
    }else{
      console.log("Login failed!");
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className='bg-white p-8 rounded-lg shadow-lg'>
      <section className='mb-4'>
        <img src="assets/img/logoCuadrado.png" alt="logo" className='mx-auto' />
      </section>
      <section>
      <h1 className='text-2xl text-center mb-4'>Iniciar Sesión</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <input className="w-full p-2 border border-gray-300 rounded mb-2 text-black" type="text" name="username" placeholder='Nombre Usuario' onChange={handleChange}/>
        </label>
        <label>
          <input className="w-full p-2 border border-gray-300 rounded mb-2 text-black" type="password" name="password" placeholder='Contraseña' onChange={handleChange}/>
        </label>
        <button className="w-full p-2 bg-red-500 text-white rounded hover:bg-red-700 transition duration-300 ease-in-out" type="submit">Ingresar</button>
        {/* <a href="#home"><p className='text-center text-gray-600'>Olvide mi Contraseña</p></a> */}
      </form>
      </section>
      </div> 
    </div>
  );
}

export default Login;
