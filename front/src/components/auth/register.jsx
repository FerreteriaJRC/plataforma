import styles from './login.module.css';

function Register() {
    return (
        <div className={styles.container}>
            <section className={styles.imagen}>
                <img src="../../assets/img/fondoFerreteria.jpg"/>
            </section>
            <section className={styles.section}>
            <h2>Registrar Usuario</h2>
            <form>
                <label>
                    <input className={styles.input} type="text" name="name" placeholder='Nombre'/>
                </label>
                <label>
                    <input className={styles.input} type="email" name="surname" placeholder='Apellidos'/>
                </label>
                <label>
                    <input className={styles.input} type="text" name="nameUser" placeholder='Usuario'/>
                </label>
                <label>
                    <input className={styles.input} type="password" name="password" placeholder='Contraseña'/>
                </label>
                <label>
                    <input className={styles.input} type="password" name="confirmPassword" placeholder='Confirmar Contraseña'/>
                </label>
                <label>
                    <input className={styles.input} type="text" name="ocupation" placeholder="ocupacion"/>  
                </label>
                <label>
                    <input className={styles.input} type="email" name="emailPersonal" placeholder='Correo Personal'/>
                </label>
                <label>
                    <input className={styles.input} type="email" name="emailProfessional" placeholder='Correo Profesional'/>
                </label>
                <button type="submit">Registrar</button>
            </form>
            </section>
        </div>
    )
}

export default Register;