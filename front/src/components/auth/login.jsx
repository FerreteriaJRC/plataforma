function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <label>
          Nombre de usuario:
          <input type="text" name="nameUser" />
        </label>
        <label>
          Contraseña:
          <input type="password" name="password" />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;