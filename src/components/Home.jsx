import { Link } from "react-router-dom";
import { HeaderHome } from "./HomeHeader";

export function Home() {

    return <section id="main-hero" className="hero-section">
        <HeaderHome/>

        <div className="hero-content">

            <div>
                <span className="h3-sans" >La mejor forma de decir:</span>
                <h1 className="h1-script">Nos Casamos</h1>
            </div>

            <div>
                <h4 className="h4-sans">Compartid vuestro gran día con una invitación digital elegante, práctica y fácil de crear.</h4>

                <div className="container-buttons">
                    <Link className="button button-alt">Ver plantilla</Link>
                    <Link to='/registrarse' className="button">Empezar gratis</Link>
                </div>
            </div>

        </div>
    </section>
}