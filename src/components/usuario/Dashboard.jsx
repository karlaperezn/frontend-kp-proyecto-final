import "../../CSS/usuario.css"
import { Link } from "react-router-dom";
import { Section1DB } from "./dashboardComponents/Section1DB";
import { Section2DB } from "./dashboardComponents/Section2DB";

export function Dashboard({ weddings, setWeddings, selectedWedding, setSelectedWedding, guestsResponses }) {
    const fullName = localStorage.getItem('fullName')

    return <div>
        <header>
            <div>
                <Link className="logo-link" to='/'>
                    <h3 className="h3-sansserif">Logo</h3>
                </Link>
            </div>
            <div className="navBar">
                <p><strong>Panel RSVP</strong></p>
                <p>Ver invitación</p>
                <p>|</p>
                {/* Pendiente de volverlo link */} <p><strong>{fullName}</strong></p>
                <div className="avatarProfile"><i className="fa-solid fa-user"></i></div>
            </div>
        </header>
        <Section1DB weddings={weddings} setWeddings={setWeddings} selectedWedding={selectedWedding} setSelectedWedding={setSelectedWedding} guestsResponses={guestsResponses} />
        <Section2DB guestsResponses={guestsResponses} />
    </div>
}