import 'tailwindscss';

function Register() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-sky-400">
            <div className="bg-white p-8 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 gap-8">
            <section className='flex items-center justify-center'>
                <img src="../../../public/assets/img/logoCuadrado.png" alt="Logo" className='max-wfull h-auto'/>
            </section>
            <section className="space-y-4">
            <form className="">
                <h2 className='text-2xl font-bold mb-4 text-center'>Register</h2>
                <div className='grid grid-cols-2 md:grid-cols-2 gap-4'>
                    <label>
                        <input className="w-full p-2 border border-gray-300 rounded" type="text" name="name" placeholder='Nombres'/>
                    </label>
                    <label>
                        <input className="w-full p-2 border border-gray-300 rounded" type="email" name="surname" placeholder='Apellidos'/>
                    </label>
                </div>
                
                <div className='grid grid-cols-2 md:grid-cols-2 gap-4'>
                    <label>
                        <input className="" type="text" name="nameUser" placeholder='Nombre Usuario'/>
                    </label>
                    <label>
                        <input className="" type="password" name="password" placeholder='Contraseña'/>
                    </label>
                </div>

                <div className='grid grid-cols-2 md:grid-cols-2 gap-4'>
                    <label>
                        <input className="" type="password" name="confirmPassword" placeholder='Confirmar Contraseña'/>
                    </label>
                    <label>
                        <input className="" type="text" name="ocupation" placeholder='Ocupacion'/>  
                    </label>
                </div>
                
                <div className='grid grid-cols-2 md:grid-cols-2 gap-4'>
                <label>
                    <input className="w-full" type="email" name="emailPersonal" placeholder='Correo Personal'/>
                </label>
                <label>
                    <input className="" type="email" name="emailProfessional" placeholder='Correo Profesional'/>
                </label>
                </div>
                <button className=""> Registrar </button>
            </form>
            </section>
            </div>
        </div>
    )
}

export default Register;