//import { Link } from "react-router-dom"
import '../CSS/registrarse.css'

export function Registrarse() {

    return <div>
        <header>
            <div className="logo"><span>Logo</span></div>
            <div id="navBar">
            </div>
        </header>
        <div id="register-screen">
            <h3>Crea tu cuenta</h3>
            <span>Regístrate gratis para crear tu invitación de boda digital</span>

            <div className="basic-form">
                <div className="input-label">
                    <label>Nombre completo</label>
                    <input type="text" id="name-register"/>
                </div>
                <div className="input-label">
                    <label>Correo electrónico</label>
                    <input type="text" id="email-register"/>
                </div>
                <div className="input-label">
                    <label>Contraseña</label>
                    <input type="text" id="password-register"/>
                </div>
                <button>Crear cuenta</button>

            </div>
        </div>
    </div>
}