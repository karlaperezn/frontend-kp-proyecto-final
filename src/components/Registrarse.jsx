import { Link } from "react-router-dom"
import "../CSS/registrarse.css"

export function Registrarse() {

    return <div>
        <header>
            <div><h3>Logo</h3></div>
            <div className="navBar">
            </div>
        </header>
        <div id="register-screen">
            <h3>Crea tu cuenta</h3>
            <span>Regístrate gratis para crear tu invitación de boda digital</span>

            <div className="basic-form">
                <div className="field-form">
                    <label>Nombre completo</label>
                    <input type="text" required/>
                </div>
                <div className="field-form">
                    <label>Correo electrónico</label>
                    <input type="email" required/>
                </div>
                <div className="field-form">
                    <label>Contraseña</label>
                    <input type="password" required/>
                </div>
                <div className="field-checkbox">
                    <input type="checkbox" id="terms-policy" className="checkbox"/>
                    <label for="terms-policy">Acepto los términos y condiciones</label>
                </div>
                <button className="button">Crear cuenta</button>
                <div>
                <Link className="internal-link" to='/iniciar-sesion'>Ya tengo cuenta</Link>
                </div>

            </div>
        </div>
    </div>
}