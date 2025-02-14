import 'tailwindscss';
import type React from 'react';
import {ILoginProps, ILoginErrors} from '../../interfaces/interfaces'
import { login } from '../../helpers/auth.helper';
import { useState } from 'react';
import Cookies from 'js-cookie';
// import Image from 'next/image';

const Login = () => {
  const [values, setValues] = useState<ILoginProps>({email: "", password: ""});
  const [errors, setErros] = useState<ILoginErrors({});
  const [setUser] = useState<>
}

const handleLogin = async(e: React.FormEvent)=> {
  e preventDefault();
  
  try {
    const response = await Login(values)
    
    if(response.data.token && response.data.user){
      const { token, user } = response.data;

      Cookies.set("token", token, { expires: 7});
      

    }  
  } catch (error) {
    
  }
}

function Login() {
  return (
    <div className="flex flex-nowrap m-8 bg-sky-400">
      <section>
        <img src="assets/img/logoCuadrado.png" alt="logo" />
      </section>
      <section>
      <form onSubmit={handleLogin}>
      <h2>Iniciar Sesion</h2>
        <label>
          <input className="" type="text" name="nameUser" placeholder='Nombre Usuario'/>
        </label>
        <label>
          <input className="" type="password" name="password" placeholder='Contraseña'/>
        </label>
        <button className="transition duration-700 ease-in-out" type="submit">Ingresar</button>
      </form>
      </section>
    </div>
  );
}

export default Login;
