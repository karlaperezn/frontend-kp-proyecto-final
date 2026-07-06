import { Link } from "react-router-dom";
import "../CSS/home.css"

export function Home() {

    return <div className="hero-section">
        <header>
            <div className="logo"><span>Logo</span></div>
            <div id="navBar">
                <Link to='registrarse'>Registrarse</Link>
                <Link to='inciar-sesion'>Iniciar sesión</Link>
            </div>
        </header>
        <div className="content-hero">
            <div className="title-hero">
                <span id="span-hero">La mejor forma de decir:</span>
                <h1>Nos Casamos</h1>
            </div>
            <div className="text-hero">
                <h3>Comparte vuestro gran día con una invitación digital elegante, práctica y fácil de crear.</h3>
                <div className="buttons-hero">
                    <Link className="button alt-button">Ver plantilla</Link>
                    <Link to='registrarse' className="button">Empezar gratis</Link>
                </div>
            </div>

        </div>
    </div>
}