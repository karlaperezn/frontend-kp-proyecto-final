import { Link } from "react-router-dom"

export function IniciarSesion() {

    return <div>
        <header>
            <div>
                <Link className="logo-link" to='/'>
                    <h3>Logo</h3>
                </Link>
            </div>
            <div className="navBar">
            </div>
        </header>
        <div id="register-screen">
            <h3>¡Bienvenido/a!</h3>
            <span>Ingresa tus datos para iniciar sesión en tu cuenta</span>

            <div className="basic-form">
                <div className="field-form">
                    <label>Correo electrónico</label>
                    <input type="email" id="email-register" required />
                </div>
                <div className="field-form">
                    <label>Contraseña</label>
                    <input type="password" id="password-register" required />
                </div>
                <button className="button">Iniciar sesión</button>
                <div>
                    <Link className="internal-link" to='/registrarse'>Aún no tengo cuenta</Link>
                </div>

            </div>
        </div>
    </div>
}