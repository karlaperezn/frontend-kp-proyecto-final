import { Link } from "react-router-dom";

export function HeaderHome() {

    return <header className="header">
            <div><h3>Logo</h3></div>

            <div className="navBar">
                <Link to='registrarse'>Registrarse</Link>
                <Link to='iniciar-sesion'>Iniciar sesión</Link>
            </div>

        </header>
}