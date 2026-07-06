import { Link } from "react-router-dom";
import "../CSS/home.css"

export function Home() {

    return <div>
        <header>
            <div><h3>Logo</h3></div>
            <div id="navBar">
                <Link to='resgistrarse'>Registrarse</Link>
                <Link to='inciar-sesion'>Iniciar sesión</Link>
            </div>
        </header>
    </div>
}