import styles from '../../styles/Login.module.css';

function Register() {
    return (
        <div className={styles.container}>
            <section className={styles.section}>
                <img src="../../../public/assets/img/logoCuadrado.png" alt="Logo" />
            </section>
            <section className={styles.section}>
            <form className={styles.form}>
                <h2>Register</h2>
                <label>
                    <input className={styles.input} type="text" name="name" placeholder='Nombres'/>
                </label>
                <label>
                    <input className={styles.input} type="email" name="surname" placeholder='Apellidos'/>
                </label>
                <label>
                    <input className={styles.input} type="text" name="nameUser" placeholder='Nombre Usuario'/>
                </label>
                <label>
                    <input className={styles.input} type="password" name="password" placeholder='Contraseña'/>
                </label>
                <label>
                    <input className={styles.input} type="password" name="confirmPassword" placeholder='Confirmar Contraseña'/>
                </label>
                <label>
                    <input className={styles.input} type="text" name="ocupation" placeholder='Ocupacion'/>  
                </label>
                <label>
                    <input className={styles.input} type="email" name="emailPersonal" placeholder='Correo Personal'/>
                </label>
                <label>
                    <input className={styles.input} type="email" name="emailProfessional" placeholder='Correo Profesional'/>
                </label>
                <button className={styles.button}> Registrar </button>
            </form>
            </section>
        </div>
    )
}

export default Register;