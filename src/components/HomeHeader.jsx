import { Link } from "react-router-dom";
import "../CSS/home.css"

export function HeaderHome() {

    return <header>
            <div><h3>Logo</h3></div>
            <div className="navBar">
                <Link className="navbar-a-home" to='registrarse'>Registrarse</Link>
                <Link className="navbar-a-home" to='iniciar-sesion'>Iniciar sesión</Link>
            </div>
        </header>
}