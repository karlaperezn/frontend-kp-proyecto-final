import { Link } from "react-router-dom";
import { HeaderHome } from "./HomeHeader";
import "../CSS/home.css"

export function Home() {

    return <div className="hero-section">
        <HeaderHome/>

        <div id="content-hero-home">
            <div className="title-hero">
                <span id="span-hero-home">La mejor forma de decir:</span>
                <h1>Nos Casamos</h1>
            </div>
            <div id="cta-hero-home">
                <h4>Compartid vuestro gran día con una invitación digital elegante, práctica y fácil de crear.</h4>
                <div className="buttons-div">
                    <Link className="button alt-button">Ver plantilla</Link>
                    <Link to='registrarse' className="button">Empezar gratis</Link>
                </div>
            </div>

        </div>
    </div>
}