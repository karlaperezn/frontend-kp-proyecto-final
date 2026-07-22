
export function UbicacionIB({ inviteValues }) {

    return <div id="location-section" className="section-row location-section">

        <div className="location-column">
            <h2>Ceremonia</h2>

            <div className="info-location">
                <h3>{inviteValues.ceremony.place}</h3>
                <p>{inviteValues.ceremony.address}</p>
            </div>

            <p>Lunes 17 de marzo - {inviteValues.ceremony.hour}</p>

        </div>

        <div className="location-column divider-line">
            <h2>Recepción</h2>

            <div className="info-location">
                <h3>{inviteValues.reception.place}</h3>
                <p>{inviteValues.reception.address}</p>
            </div>

            <p>Lunes 17 de marzo - {inviteValues.reception.hour}</p>
                
        </div>
    </div>
}