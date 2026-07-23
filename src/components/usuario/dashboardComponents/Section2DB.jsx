import { GuestsTable } from "./GuestsTable";
import { Collabs } from "./Collabs";


export function Section2DB({ guestsResponses, selectedWedding, collabs, setCollabs }) {

    const numGuest = guestsResponses.filter(g => g.dietaryRestrictions && g.dietaryRestrictions.length > 0).length.toString().padStart(2, '0');

    return <section id="section2-dashboard" className="section-row section-dasboard">
        <GuestsTable className="columna-izq-fila1" guestsResponses={guestsResponses} />

        <Collabs className="columna-izq-fila2" selectedWedding={selectedWedding} collabs={collabs} setCollabs={setCollabs} />


        <div id="guest-dietary-list" className="columna-der">
            <h4 className="h4-sans">Invitados con restricciones alimentarias ({numGuest})</h4>
            <ul>
                {guestsResponses.filter(g => g.dietaryRestrictions && g.dietaryRestrictions.length > 0).map(g => {
                    return <li>{g.fullName} - {Array.isArray(g.dietaryRestrictions)
                        ? g.dietaryRestrictions.join(", ")
                        : g.dietaryRestrictions}</li>
                })}

            </ul>
        </div>
    </section>
}