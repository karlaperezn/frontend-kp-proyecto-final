import "../../CSS/usuario.css"
import { Link } from "react-router-dom";
import { Section1DB } from "./dashboardComponents/Section1DB";
import { Section2DB } from "./dashboardComponents/Section2DB";

export function Dashboard({ weddings, setWeddings, selectedWedding, setSelectedWedding, guestsResponses, setGuestsResponses }) {
    const fullName = localStorage.getItem('fullName')

    return <>
        <header id="header-dashboard" className="header">
            <div><h3>Logo</h3></div>

            <div className="navBar">
                <p><strong>Panel RSVP</strong></p>
                <Link to={`/invitacion-boda/${selectedWedding.slug}`}>Ver invitación</Link>
                <p>|</p>
                <Link className="strong">{fullName}</Link>
                <div className="avatarProfile"><i className="fa-solid fa-user" /></div>
            </div>

        </header>


        <Section1DB weddings={weddings} setWeddings={setWeddings} selectedWedding={selectedWedding} setSelectedWedding={setSelectedWedding} guestsResponses={guestsResponses} setGuestsResponses={setGuestsResponses} />
        <Section2DB guestsResponses={guestsResponses} />
    </>
}