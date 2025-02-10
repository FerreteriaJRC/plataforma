import styles from '../../styles/Login.module.css';
// import Image from 'next/image';

function Login() {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <img src="/plataforma/front/src/assets/img/logoCuadrado.png" alt="logo" />
      </section>
      <section className={styles.section}>
      <form className={styles.form}>
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
