import  styles  from './navbar.module.css';

function Navbar(){
    return(
        <nav className={styles.navbar}>
            <div className={styles.leftLinks}>
                <a href='#'>Iniciar Sesion</a>
                <a href="#">Registrar</a>
            </div>
            <div className={styles.rightImage}>
                <img src="../../assets/img/logo.png" alt="Imagen"/>
            </div>
        </nav>
    )
}

export default Navbar;