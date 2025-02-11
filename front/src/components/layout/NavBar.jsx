import { Link } from 'react-router-dom';

import "tailwindscss";

function Navbar(){
    return(
        <nav className="flex justify-between flex-row-reverse items-center p-4 bg-black text-white">
            <div className='flex space-x-4'>
                <Link to="/login" className="bg-red-600 py-2 px-6 rounded-full hover:bg-red-700 transition duration-300 mr-3">Iniciar Sesion</Link>
                <Link to="/register" className="bg-red-600 py-2 px-6 rounded-full hover:bg-red-700 transition duration-300">Registrar Usuario</Link>
            </div>
            <div>
                <Link to="/home"><img src="../../../public/assets/img/logoCuadrado.png" alt="Logo" className='h-10 ml-3'/></Link>
            </div>
        </nav>
    )
}

export default Navbar;