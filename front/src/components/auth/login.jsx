import 'tailwindscss'
// import Image from 'next/image';

function Login() {
  return (
    <div className="flex flex-nowrap m-8 bg-sky-400">
      <section>
        <img src="assets/img/logoCuadrado.png" alt="logo" />
      </section>
      <section>
      <form>
      <h2>Iniciar Sesion</h2>
        <label>
          <input className="" type="text" name="nameUser" placeholder='Nombre Usuario'/>
        </label>
        <label>
          <input className="" type="password" name="password" placeholder='Contraseña'/>
        </label>
        <button className="transition duration-700 ease-in-out" type="submit">Ingresar</button>
      </form>
      </section>
    </div>
  );
}

export default Login;
