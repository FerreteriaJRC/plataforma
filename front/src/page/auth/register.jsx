import 'tailwindscss';
import '../../App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Add this import
import { register } from '../../helpers/auth.helper';
import { motion } from 'framer-motion';
import Image from 'next/image';

function Register() {

    const [formData, setFormData ] = useState({
        name: '',
        surname: '',
        nameUser: '',
        password: '',
        confirmPassword: '',
        ocupation: '',
        personalEmail: '',
        profesionalEmail: '',
        rol: 'General'
    })

    const navigate = useNavigate();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({ ...formData, [name]: value })
    } 

    const handleSubmit = async(e) => {
        e.preventDefault();
        const response = await register(formData);
        if(response){
            alert('Usuario Creado Con exito'); // Add this line
            navigate('/login') // Add this line
        }else{
            console.error('Error en el registro');
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white bg-opacity-75 p-8 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 gap-8">
            <section className='flex items-center justify-center'>
            <motion.img // Use motion.img
                        src="../../../public/assets/img/logoCuadrado.png"
                        alt="Logo"
                        className='max-wfull h-auto'
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                    />
            </section>
            <section className="space-y-4">
            <form onSubmit={handleSubmit}>
                <h2 className='text-2xl font-bold mb-4 text-center'>Register</h2>
                <div className='grid grid-cols-2 md:grid-cols-2 gap-4'>
                    <label>
                        <input className="p-2 m-2 border border-gray-300 rounded" type="text" name="name" placeholder='Nombres' onChange={handleChange} />
                    </label>
                    <label>
                        <input className="p-2 m-2 border border-gray-300 rounded" type="text" name="surname" placeholder='Apellidos' onChange={handleChange}/>
                    </label>
                </div>
                
                <div className='grid grid-cols-2 md:grid-cols-2 gap-4'>
                    <label>
                        <input className="p-2 m-2 border border-gray-300 rounded" type="text" name="nameUser" placeholder='Nombre Usuario' onChange={handleChange}/>
                    </label>
                    <label>
                        <input className="p-2 m-2 border border-gray-300 rounded" type="text" name="ocupation" placeholder='Ocupacion' onChange={handleChange}/>  
                    </label>
                </div>

                <div className='grid grid-cols-2 md:grid-cols-2 gap-4'>
                <label>
                        <input className="p-2 m-2 border border-gray-300 rounded" type="password" name="password" placeholder='Contraseña' onChange={handleChange}/>
                    </label>
                    <label>
                        <input className="p-2 m-2 border border-gray-300 rounded" type="password" name="confirmPassword" placeholder='Confirmar Contraseña' onChange={handleChange}/>
                    </label>
                </div>
                
                <div className='grid grid-cols-2 md:grid-cols-2 gap-4'>
                <label>
                    <input className="p-2 m-2 border border-gray-300 rounded" type="email" name="emailPersonal" placeholder='Correo Personal' onChange={handleChange}/>
                </label>
                <label>
                    <input className="p-2 m-2 border border-gray-300 rounded" type="email" name="emailProfesional" placeholder='Correo Profesional' onChange={handleChange}/>
                </label>
                </div>
                <button className="w-full mt-2 mb-2 p-2 bg-red-500 text-white rounded hover:bg-red-900 transition duration-300 ease-in-out" type="submit"> Registrar </button>
                <a href="#home"><p className='text-center text-gray-600'>Olvide mi Contraseña</p></a>
            </form>
            </section>
            </div>
        </div>
    )
}

export default Register;