
export function Section2DB({ guestsResponses }) {

    return <div id="section2_dashboard" className="section">
        <div id="table-guestslist">
            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>NOMBRE</th>
                        <th>CORREO ELECTRÓNICO</th>
                        <th>ASISTENCIA</th>
                        <th>RESTRICCIÓN ALIMENTARIA</th>
                        <th>MENSAJE</th>
                    </tr>
                </thead>
                {guestsResponses.map((g, i) => {
                return <tbody>
                    <tr>
                        <td><strong>{(i + 1).toString().padStart(2, '0')}</strong></td>
                        <td>{g.fullName}</td>
                        <td>{g.email}</td>
                        <td>{g.attending ? <i class="fa-solid fa-circle-check" /> : <i class="fa-regular fa-circle-xmark" />}</td>
                        <td>{g.dietaryRestrictions}</td>
                        <td>{g.guestMessage}</td>
                    </tr>
                </tbody>
                })}
            </table>
        </div>
    </div>
}