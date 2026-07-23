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
                <p style={{cursor: "pointer"}}><strong>Panel RSVP</strong></p>

                {selectedWedding && selectedWedding._id && (
                    <Link to={`/invitacion/${selectedWedding.slug} `} target="_blank"
                        rel="noopener noreferrer">Ver invitación</Link>
                )}

                {(!selectedWedding || !selectedWedding._id) && (
                    <div className="tooltip-container">
                        <p style={{color:"#d3cbbc", cursor: "default"}}>Ver invitación</p>
                        <span className="tooltip-text">Primero elige una boda</span>
                    </div>
                )}



                <p>|</p>
                <Link className="strong">{fullName}</Link>
                <div className="avatarProfile"><i className="fa-solid fa-user" /></div>
            </div>

        </header>


        <Section1DB weddings={weddings} setWeddings={setWeddings} selectedWedding={selectedWedding} setSelectedWedding={setSelectedWedding} guestsResponses={guestsResponses} setGuestsResponses={setGuestsResponses} />
        <Section2DB guestsResponses={guestsResponses} selectedWedding={selectedWedding} />
    </>
}