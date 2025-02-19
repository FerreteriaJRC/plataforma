"use client";

import 'tailwindscss';
import React from 'react';
import {ILoginProps, ILoginErrors} from '../../interfaces/interfaces'
import { useUserContext } from '../../context/UserContext';
import { useRouter } from 'next/navigation';
import { login} from '../../helpers/auth.helper';
import { validateLoginForm } from '../../helpers/validate';
import { useState } from 'react';
import Cookies from 'js-cookie';
import Image from 'next/image';

const Login = () => {
  const [values, setValues] = useState<ILoginProps>({username: "", password: ""});
  const [errors, setErrors] = useState<ILoginErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [serverError, setServerError] = useState("");
  // const { setUser } = useUserContext(); //!Esta linea se esta tirando el programa
  // const router = useRouter();

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setValues({...values, [name]: value})

  //   setErrors(validateLoginForm({...values, [name]: value}));//Terminar de corregir el validate login form
  // }

  // const handleLogin = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   const validateErrors = validateLoginForm(values);
  //   setErrors(validateErrors)

  //   if (Object.keys(validateErrors).length > 0){
  //     return;
  //   }

  //   try {
  //       const response = await login(values);
  //       if(response?.data?.token && response?.data?.user){
  //         const { token, user } = response.data;          
  //         Cookies.set("token", token, { expires: 7});
  //         setUser(user);
  //         localStorage.setItem("user", JSON.stringify(user))
  //       }else{
  //         setServerError("Credenciales invalidas")
  //       }
  //   } catch (error) {
  //     setServerError("Error de try catch en el login")
  //   }
  // }

  return (
    <div className="flex items-center justify-center min-h-screen bg-sky-400">
      <div className='bg-white p-8 rounded-lg shadow-lg'>
      <section className='mb-4'>
        <img src="assets/img/logoCuadrado.png" alt="logo" className='mx-auto'/>
      </section>
      <section>
      <h1 className='text-2xl text-center mb-4'>Iniciar Sesión</h1>
      <form>
        <label>
          <input className="w-full p-2 border border-gray-300 rounded mb-2 text-black" type="text" name="username" placeholder='Nombre Usuario'/>
        </label>
        <label>
          <input className="w-full p-2 border border-gray-300 rounded mb-2 text-black" type="password" name="password" placeholder='Contraseña'/>
        </label>
        <button className="w-full p-2 bg-red-500 text-white rounded hover:bg-red-700 transition duration-300 ease-in-out" type="submit">Ingresar</button>
      </form>
      </section>
      </div> 
    </div>
  );
}

export default Login;
