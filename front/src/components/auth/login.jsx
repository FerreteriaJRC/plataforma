import styles from '../../styles/Login.module.css';

function Login() {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <img src="/logo.png" alt="Logo" />
      </section>
      <section className={styles.section}>
      <form>
      <h2>Iniciar Sesion</h2>
        <label>
          <input className={styles.input} type="text" name="nameUser" placeholder='Nombre Usuario'/>
        </label>
        <label>
          <input className={styles.input} type="password" name="password" placeholder='Contraseña'/>
        </label>
        <button className={styles.button} type="submit">Ingresar</button>
      </form>
      </section>
    </div>
  );
}

export default Login;