import styles from './login.module.css';

function Login() {
  return (
    <div className={styles.container}>
      <section>
        <div className={styles.imagen}>
          <img src="../../assets/img/fondoFerreteria.jpg"/>
        </div>
      </section>
      <section className={styles.section}>
        <h2>Iniciar Sesion</h2>
        <form>
          <label>
            <input className={styles.input} type="text" name="nameUser" placeholder='Nombre Usuario'/><br />
          </label>
          <label>
            <input className={styles.input} type="password" name="password" placeholder='Contraseña'/><br />
          </label>
          <button className={styles.input} type="submit">Login</button>
        </form>
        </section>
    </div>
  );
}

export default Login;
