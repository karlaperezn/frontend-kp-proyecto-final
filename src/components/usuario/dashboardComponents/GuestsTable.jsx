
export function GuestsTable({guestsResponses}) {

    return <>
        <div id="guests-table">
            <table>
                <thead>
                    <tr>
                        <th id="guest-index">NO.</th>
                        <th className="title-table">NOMBRE</th>
                        <th className="title-table"> CORREO ELECTRÓNICO</th>
                        <th id="attending">ASISTENCIA</th>
                        <th className="title-table">MENSAJE</th>
                    </tr>
                </thead>
                {guestsResponses.map((g, i) => {
                    return <tbody>
                        <tr>
                            <td ><strong>{(i + 1).toString().padStart(2, '0')}</strong></td>
                            <td className="small-text">{g.fullName}</td>
                            <td className="small-text">{g.email}</td>
                            <td className="small-text">{g.attending ? <i class="fa-solid fa-circle-check" /> : <i class="fa-regular fa-circle-xmark" />}</td>
                            <td className="small-text">{g.guestMessage}</td>
                        </tr>
                    </tbody>
                })}
            </table>
        </div>
        <div id="guests-cards">
            {guestsResponses.map((g, i) => {
                return <div className="guest-card">
                    <div className="guest-card-col1">
                        <div className="h3-sans card-guest-index"> <strong>{(i + 1).toString().padStart(2, '0')}</strong></div>

                        <div>
                            <p>{g.fullName}</p>
                            <p className="xsmall-text">{g.email}</p>
                        </div>

                    </div>

                    <div className="guest-card-col2">
                        <p className="h3-sans message-icon">{g.guestMessage ? <i class="fa-regular fa-envelope"></i> : ""}</p>
                        <div className={g.attending ? "si-asiste" : "no-asiste"}>
                            <p className="small-text">{g.attending ? "Sí asiste" : "No asiste"}</p>
                        </div>
                    </div>
                </div>
            })}
        </div>
    </>
}