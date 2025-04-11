import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'

import "tailwindscss";

const NavBar = () => {
    return(
        <nav className="flex justify-between flex-row-reverse items-center p-4 text-white">
            <div className='flex space-x-4'>
                <motion.h2
                    initial={{ opacity: 0, x: 200 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                <Link to="/login" className="bg-red-600 py-2 px-6 rounded-full hover:bg-red-700 transition duration-300 mr-3">Iniciar Sesion</Link>
                <Link to="/register" className="bg-red-600 py-2 px-6 rounded-full hover:bg-red-700 transition duration-300">Registrar Usuario</Link>
                </motion.h2>
            </div>
            <div>
                <Link to="/home"><img src="/assets/img/logoCuadrado.png" alt="Logo" className='h-10 ml-3'/></Link>
            </div>
        </nav>
    )
}

export default NavBar;