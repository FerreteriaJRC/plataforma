import 'tailwindscss';
// import React from 'react';
// import {ILoginProps, ILoginErrors} from '../../interfaces/interfaces'
// import { login } from '../../helpers/auth.helper';
// import { useState } from 'react';
// import Cookies from 'js-cookie';
// import Image from 'next/image';

// const Login = () => {
//   const [values, setValues] = useState<ILoginProps>({email: "", password: ""});
//   const [errors, setErros] = useState<ILoginErrors({});
//   const [setUser] = useState<>
// }

// const handleLogin = async(e: React.FormEvent)=> {
//   e preventDefault();
  
//   try {
//     const response = await Login(values)
    
//     if(response.data.token && response.data.user){
//       const { token, user } = response.data;

//       Cookies.set("token", token, { expires: 7});
      

//     }  
//   } catch (error) {
    
//   }
// }

function Login() {
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
          <input className="w-full p-2 border border-gray-300 rounded mb-2 text-white" type="text" name="nameUser" placeholder='Nombre Usuario'/>
        </label>
        <label>
          <input className="w-full p-2 border border-gray-300 rounded mb-2 text-white" type="password" name="password" placeholder='Contraseña'/>
        </label>
        <button className="w-full p-2 bg-red-500 text-white rounded hover:bg-red-700 transition duration-300 ease-in-out" type="submit">Ingresar</button>
      </form>
      </section>
      </div> 
    </div>
  );
}

export default Login;
