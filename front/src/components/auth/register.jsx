function Register() {
    return (
        <div>
            <h2>Register</h2>
            <form>
                <label>
                    Nombres:
                    <input type="text" name="name" />
                </label>
                <label>
                    Apellidos:
                    <input type="email" name="surname" />
                </label>
                <label>
                    Nombre Usuario:
                    <input type="text" name="nameUser" />
                </label>
                <label>
                    Contraseña:
                    <input type="password" name="password" />
                </label>
                <label>
                    Confirmar Contraseña:
                    <input type="password" name="confirmPassword"/>
                </label>
                <label>
                    Ocupacion:
                    <input type="text" name="ocupation" />  
                </label>
                <label>
                    Email Personal:
                    <input type="email" name="emailPersonal" />
                </label>
                <label>
                    Email Profesional:
                    <input type="email" name="emailProfessional" />
                </label>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register;