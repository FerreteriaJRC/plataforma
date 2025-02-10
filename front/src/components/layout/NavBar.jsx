import { Link } from 'react-router-dom';
import styles from '../../styles/navbar.module.css'

function Navbar(){
    return(
        <nav className={styles.navbar}>
            <div className={styles.leftLinks}>
                <Link to="/login">Iniciar Sesion</Link>
                <Link to="/register">Registrar Usuario</Link>
            </div>
            <div className={styles.rightImage}>
                <Link to="/home"><img src="../../assets/img/logo.png" alt="Imagen"/></Link>
            </div>
        </nav>
    )
}

export default Navbar;